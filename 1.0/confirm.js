/**
 * @fileoverview 
 * @author 栋寒<donghan@taobao.com>
 * @module confirm
 **/
KISSY.add('gallery/contacts/1.0/confirm' , function (S, Node , Base) {
	
	'use strict';

    var EMPTY = '';

    var $ = Node.all;

    /**
     * 
     * @class Confirm
     * @constructor
     * @extends Base
     */
    function Confirm(cfg) {
        var self = this;
        //调用父类构造函数
        Confirm.superclass.constructor.call(self, cfg);
		self.init(cfg);
    }

    S.extend(Confirm, Base, {
		
		init : function () {
			this.buildDom().bindEvent();
		},
		
		// 获得弹窗内部的dom字符串
		getDomStr : function () {
			var self = this , type = self.get('type') , tip = self.get('tip') , wrap = self.get('wrap').replace('#' , '');
			var arr = [
				'<div id="' + wrap  + '" class="ks-w-confirm" style="visibility: hidden;">',
					'<div class="mask"></div>',
					'<div class="box">',
						'<div class="content">' + tip + '</div>',
						'<div class="action">' + (type === 'confirm' ? ' <em class="cancel">取消</em>' : '') + '<em class="confirm">确定</em></div>',
					'</div>',
				'</div>'
			];	

			return arr.join('');
		},

		// 构建dom结构
		buildDom : function () {
			var domStr = this.getDomStr();
			var confirmBox = this.confirmBox = $(domStr);
			$('body').append(confirmBox);
			this.maskZoom().calcPos();

			return this;
		},

		// 确定弹窗的位置（margin值）
		calcPos : function () {
			var box = this.confirmBox.one('.box');	
			var size = box.height();
			var scrolltop = document.body.scrollTop;
			var viewSize = window.innerHeight;

			box.css('margin-top' , (scrolltop + (viewSize - size ) /2)  + 'px');
			this.confirmBox.css('visibility' , 'visible');

			return this;
		},
		
		// 初始化蒙层的边界，这里主要是高度
		maskZoom : function () {
			var viewSize = window.innerHeight , bodySize = document.body.offsetHeight;
			var mask = this.confirmBox.one('.mask');

			if (viewSize >= bodySize) {
				mask.css('height' , viewSize + 'px');	
			} else {
				mask.css('height' , bodySize + 'px');	
			}

			return this;
		},

		// 代理事件
		bindEvent : function () {
			var self = this;
			var box = this.confirmBox;

			box.delegate('click' , '.cancel' , function (e) {
				self.get('onCancel')();
				self.fire('cancel');
				self.destroy();
			}).delegate('click' , '.confirm' , function (e) {
				self.get('onConfirm')();
				self.fire('confirm');
				self.destroy();
			}).delegate('touchstart' , 'em' , function (e) {
				$(e.currentTarget).addClass('press');
			}).delegate('touchend' , 'em' , function (e) {
				$(e.currentTarget).removeClass('press');
			});
		},

		// 销毁弹窗
		destroy : function () {
			var self = this;
			self.confirmBox.remove();
			self = null;
		}


    } , {
		ATTRS : {
			
			wrap : {
				value : '#ks-w-confirm'
			},
			type : {
				value : 'confirm'	
			},
			tip : {
				value : '弹窗'	
			},
			onConfirm : {
				value : function () {}	
			},
			onCancel : {
				value : function () {}	
			}
		}
	});

    return Confirm;

} , {
	requires : ['node', 'base']
});

