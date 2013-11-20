/**
 * @fileoverview 
 * @author 栋寒<donghan@taobao.com>
 * @module contacts
 **/
KISSY.add("gallery/contacts/1.0/index" , function (S , Backbone , Iscroll , Pinyin , Confirm) {
	
	'use strict';

	window['C'] = {};
	
	var $ = Backbone.$ , _ = Backbone._;

	var hook = {
		phonesbox : $('#phones .box'),
		getMorePhone : $('#getMore'),
		phonetmp : $('#phoneTmp'),
		showPhones : $('#showPhones .box'),
		sidebar : $('#sidebar'),
		selectNo : $('#toolbar em'),
		holder : $('#holder'),
		loading: $('#loading')
	};

	var timer;
	
	// 联系人数据元
	var PhoneModel = Backbone.Model.extend({});

	var SelectPhoneModel = Backbone.Model.extend({});

	// 联系人集合
	var PhoneCollection = Backbone.Collection.extend({
		model : PhoneModel,
		initialize : function () {
			this.bind('add' , this.addOne , false);		
		},
		
		// 数据集合中增加单条数据元的回调
		addOne : function (data) {
			var phoneview = new PhoneView({
				model : data	
			});	
			var el = phoneview.render().$el;

			hook.getMorePhone.before(el);
			hook.getMorePhone.removeClass('hidden');

			// 防止多次refresh
			timer && clearTimeout(timer);
			timer = setTimeout(function () {
				C.phoneScroll.refresh();
			} , 100);

		},

		// 根据电话号码检索集合中是否存在数据元
		// 如存在，则返回name值；否则返回false
		getModelByAttr : function (phone) {
			var obj;
			this.each(function (v , index) {
				var number = v.get('phone');
				if (number === phone) {
					obj = {
						model : v,
						index : index
					};
					return false;
				}
			});				
			return obj;
		}
	});

	var phonecollection = new PhoneCollection();

	// 已选择联系人集合
	var SelectPhoneCollection = Backbone.Collection.extend({
		model : SelectPhoneModel,
		initialize : function () { 
			this.bind('add' , this.addOne , false);	
		},

		// 已经联系人集合增加单条数据的回调
		addOne : function (data) {
			var selectview = new SelectPhoneView({
				model : data	
			});
			selectview.render();
		},
		
		// 根据联系人视图中的数据元删除已选联系人中的数据
		_remove : function (data) {
			var _index;
			this.each(function (v , index) {
				if (v.get('name') === data.name) {
					_index = index;	
				}
			});	

			this.at(_index).destroy();
		},

		syncPhoneStatus : function (data) {
			var name = data.name;	
			phonecollection.each(function (v , index) {
				if (v.get('name') === name) {
					v.set('checked' , false);	
					return false;
				}	
			});
		}
		
	});

	// 创建已选择联系人集合的实例对象
	var selectphones = new SelectPhoneCollection();
	
	// 联系人视图
	var PhoneView = Backbone.View.extend({
		events : {
			'tap' : 'statusToggle'
		},

		initialize : function () {
			var self = this;
			var model = this.model;
			model.bind('change:checked' , this.checkedStatus , this);
		},
		
		// 当联系人被操作后,显示状态变化
		checkedStatus : function () {
			var model = this.model;
			var checked = model.get('checked'),
				checkbox = this.$el.one('.checkbox');
			checked ? checkbox.addClass('selected') : checkbox.removeClass('selected');
		},

		// 渲染单个联系人视图
		render : function () {
			var obj = this.model.toJSON() , renderTmp;
			if (typeof obj.index !== 'undefined') {
				this.$el.addClass('title');
				renderTmp = '<div><%= index %></div>';
			} else {
				this.$el.addClass('phoneItem');	
				renderTmp = hook.phonetmp.html();
			}
			var domStr = _.template(renderTmp , obj);
			this.$el.html(domStr);

			return this;
		},

		// 操作单个联系人回调
		statusToggle : function (e) {
			var self = this;
			var count = selectphones.length;

			var index = this.model.get('index');
			// 不是首字母项 
			if (typeof index === 'undefined') {
				var checked = this.model.get('checked');
				if (checked) {
					this.model.set('checked' , false);	
					selectphones._remove(this.model.toJSON());
				} else {
					var maxSelect = this.model.get('maxSelect');
					if (count < maxSelect) {
						this.model.set('checked' , true);	
						selectphones.add(this.model.toJSON());
					} else {
						new Confirm({
							tip : '最多只能添加' + maxSelect + '位好友',
							type : 'alert'
						});
					}
				}
			}
			
		}

	});
	
	// 已选联系人视图
	var SelectPhoneView = Backbone.View.extend({
		tagName : 'span',
		events : {
			//'longTap' : 'showDel',
			'click' : 'showDel',
			'touchstart' : 'press',
			'touchend' : 'press'
		},
		
		initialize : function () {
			this.model.bind('destroy' , this.remove , this);	
		},

		press : function (e) {
			var span = $(e.currentTarget);	
			span.toggleClass('press')
		},

		// 删除单个已选联系人
		remove : function () {
			this.$el.remove();	
			hook.selectNo.html(this.model.collection.length - 1);
			this.autoZoom();
			this.changeHolder(1);
		},

		// 提示删除已选赠送人
		showDel : function () {
			var self = this;
			var model = this.model;
			var data = model.toJSON();

			new Confirm({
				onConfirm: function(){
					self.model.collection.syncPhoneStatus(data);
					model.destroy();
				},
				tip: '取消对此人的赠送?'
			});
		},

		// 渲染单个已选联系人
		render : function () {
			var data = this.model.toJSON();
			var domStr = _.template('<%= name %>' , data);
			this.changeHolder(0);
			hook.holder.before(this.$el.html(domStr));
			hook.selectNo.html(this.model.collection.length);
			this.autoZoom();
		},
		
		// 修改已选联系人中的输入框的显示状态
		changeHolder : function (bug) {
			var mode = this.model , holder = hook.holder;
			var count = this.model.collection.length;
			// 当已选联系人为空时
			if (count > bug) {
				holder.attr({
					'placeholder' : ''
				}).val('').addClass('hidden')[0].blur();
			} else {
				holder.attr({
					'placeholder' : '可输入手机号码',
				}).val('').removeClass('hidden')[0].blur();
			}
		},
		
		// 已选择联系人区域自动缩放并做适当scroll,以保证最新添加的联系人显示在视图中 
		autoZoom : function () {
			var spans = hook.showPhones.all('span');	
			var totalWidth = 0 , maxWidth = $('body').width();

			for (var i = spans.length ; i -- ;) {
				totalWidth += spans.item(i).width() + 5;	
			}
			totalWidth += 45;
			
			C.phoneScroll.refresh();
			// 如果已经超过一行
			if (totalWidth > maxWidth) {
				C.selectPhoneScroll.refresh();
				C.selectPhoneScroll.scrollToElement(spans[spans.length - 1]);
			} else {
				if (!C.selectPhoneScroll) {
					C.selectPhoneScroll = new Iscroll('showPhones' , {
						vScrollbar : false,
						bounce : false
					});	
				}	
			}
		}

	});

	// 联系人应用入口
	var PhoneApp = Backbone.View.extend({
		el : '#wrap',
		pageIndex : 0,

		events : {
			'click #sidebar li' : 'skipToIndex',
			'click #showPhones' : 'showHolder',
			'input #holder' : 'listen',
			'click #delall' : 'delall',
			'touchstart #delall' : 'press',
			'touchend #delall' : 'press',
			'touchstart #confirm' : 'press',
			'touchend #confirm' : 'press',
			'click #confirm' : 'done',
			'click #getMore' : 'pushData'
		},

		initialize : function (cfg) {
			var self = this;
			var data = (typeof cfg.data === 'undefined') ? [] : cfg.data;
			this.pageSize = (typeof cfg.pageSize === 'undefined') ? 50 : cfg.pageSize;
			var preSelectArr = (typeof cfg.preSelectArr === 'undefined') ? [] : cfg.preSelectArr;
			this.maxSelect = (typeof cfg.maxSelect === 'undefined') ? 20 : cfg.maxSelect;
			var normalDataOptions = this.getPhoneDataNormal(data)

			var normalData = this.normalData = normalDataOptions.normalData;

			this.buildPhoneScroll();

			this.pushData();

			// 保证后触发事件
			S.later(function () {
				self.prevSelectPhones(preSelectArr);	
			} , 0);
			
				
		},

		// 初始化已经选择的联系人
		// 通常是从增彩页带过来的数据
		prevSelectPhones : function (prevSelectArr) {

			if (prevSelectArr) {
				prevSelectArr.forEach(function (v , index) {
					var inPhoneList = false;
					phonecollection.each(function (val , i) {
						var phone = val.get('phone');
						if (v === phone) {
							inPhoneList = i;
						}	
					});
					if (inPhoneList) {
						phonecollection.at(inPhoneList).set('checked' , true);
						selectphones.add(phonecollection.at(inPhoneList).toJSON());
					} else {
						selectphones.add({
							name : v,
							phone: v
						});
					}
				});

			}
			this.trigger('readAfter');
		},
		
		// 添加联系人完成
		done : function () {
			var arr = [] , localstr;
			if (selectphones.length === 0) {
				new Confirm({
					tip : '您还未选择联系人',
					type : 'alert'
				});
				return;
			}
			selectphones.each(function (val , i) {
				arr.push(val.toJSON());
			});
			this.trigger('selectDone' ,  arr);
		},

		// 各种按钮的二态
		press : function (e) {
			var obj = $(e.currentTarget);
			obj.toggleClass('press');
		},

		// 清空所有已选联系人
		delall : function () {
			new Confirm({
				onConfirm: function(){
					for (var i = selectphones.length ; i -- ;) {
						selectphones.syncPhoneStatus(selectphones.at(i).toJSON());
						selectphones.at(i).destroy();	
					}
				},
				tip : '清空所有已选联系人?'
			});
		},
		
		
		// 输入手机号监听
		listen : function (e) {
			var obj = $(e.currentTarget);	 
			var val = obj.val() , data = {};
			if (val.length === 11) {
				var matchRes = phonecollection.getModelByAttr(val);
				if (matchRes) {
					data.name = matchRes.model.get('name');
					phonecollection.at(matchRes.index).set('checked' , true);
				} else {
					data.name = val;
				}
				data.phone = val;
				selectphones.add(data);
			}
		},

		// 已经联系人区域点击回调
		showHolder : function (e) {
			var obj = $(e.target);
			if (obj.hasClass('box')) {
				hook.holder.removeClass('hidden').attr('placeholder' , '可输入手机号码');
			}
		},
		
		// 创建联系人视图滚动
		// 载入真实数据后只需进行refresh即可
		buildPhoneScroll : function () {
			C.phoneScroll = new Iscroll ('phones' , {
				vScrollbar : false	
			});	
		},
		
		// 向联系人集合推送数据元
		pushData : function () {
			var self = this;
			var arr = [] , normalData = this.normalData;
			hook.loading.addClass('hidden');

			var len = normalData.length;
			var maxIndex = Math.ceil(len / (this.pageSize));
			
			var firstChatArr = [];

			if (this.pageIndex >= maxIndex) {
				new Confirm({
					tip : '没有更多联系人',
					type : 'alert'
				});
				return;
			}

			var curData = normalData.slice(this.pageIndex * this.pageSize , (this.pageIndex++ + 1) * this.pageSize);

			curData.forEach(function (v , index) {
				if (typeof v === 'string') {
					arr.push({
						index : v
					});
					firstChatArr.push(v);
				} else {
					for (var i in v) {
						arr.push({
							name : i,
							phone : v[i],
							maxSelect : self.maxSelect
						});
					}
				}
			});
			
			phonecollection.add(arr);
			this.createIndex(firstChatArr);
		},

		

		// 处理源数据返回正确的格式
		// 比如: 
		// {
		//		a : {
		//			'阿欢' : '13345678765',
		//			'阿福' : '15112344321'
		//		},
		//		b : {
		//			'比伯' : '14612344321'	
		//		}
		// }
		getPhoneDataNormal : function (data) {
			var firstChatArry = [] , normalData = {} , formatData = {} , formatIndexData = [];
			var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

			data.forEach(function (v , index) {
				var pinyin = new Pinyin();
				var firstchat = pinyin.getFullChars(v.name[0]).toUpperCase();
				firstChatArry.push(firstchat[0]);

				if (typeof normalData[firstchat[0]] === 'undefined') {
					normalData[firstchat[0]] = {};		
				}
				normalData[firstchat[0]][v.name.length > 6 ? v.name.substr(0 , 6) : v.name] = v.phone;
			});

			firstChatArry = S.unique(firstChatArry);
			
			arr.forEach(function (val , i) {
				if (typeof normalData[val] !== 'undefined') {
					formatData[val] = normalData[val];
				}
				if (firstChatArry.indexOf(val) >= 0) {
					formatIndexData.push(val);
				}
			});
			
			var lastResult = [];

			for (var i in formatData) {
				var val = formatData[i];
				lastResult.push(i);
				for (var j in val) {
					var obj = {};
					obj[j] = val[j];
					lastResult.push(obj);
				}
			}

			return {
				normalData : lastResult
			};
		},

		// 创建右侧首字母检索
		createIndex : function (arr) {
			var str = '';
			var sidebar = hook.sidebar;

			arr.forEach(function (v) {
				str += '<li>' + v + '</li>';	
			});

			sidebar.append(str);
			//sidebar.css('height' , S.one('body').height() - 95 + 'px');

		} , 

		// 点击右侧检索字母,联系人跳转到相应位置
		skipToIndex : function (e) {
			var index = $(e.currentTarget).html();
			var dts = hook.phonesbox.find('.title') , _index;
			for (var i = dts.length ; i-- ; ) {
				var div = dts.eq(i).find('div');
				if (div.html() === index) {
					_index = i;
					break;
				}	
			}
			C.phoneScroll.scrollToElement(dts[_index]);
		}

	});


	return PhoneApp;

} , {
	
	requires : ['gallery/backbone-lite/1.0/' , './iscroll' , './pinyin' , 'gallery/confirm/1.0/' , 'base']

});

