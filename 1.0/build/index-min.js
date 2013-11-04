/*!build time : 2013-11-04 5:25:34 PM*/
KISSY.add("gallery/contacts/1.0/index",function(a,b,c,d,e){"use strict";window.C={};var f,g=b.$,h=b._,i={phonesbox:g("#phones .box"),getMorePhone:g("#getMore"),phonetmp:g("#phoneTmp"),showPhones:g("#showPhones .box"),sidebar:g("#sidebar"),selectNo:g("#toolbar em"),holder:g("#holder"),loading:g("#loading")},j=b.Model.extend({}),k=b.Model.extend({}),l=b.Collection.extend({model:j,initialize:function(){this.bind("add",this.addOne,!1)},addOne:function(a){var b=new p({model:a}),c=b.render().$el;i.getMorePhone.before(c),i.getMorePhone.removeClass("hidden"),f&&clearTimeout(f),f=setTimeout(function(){C.phoneScroll.refresh()},100)},getModelByAttr:function(a){var b;return this.each(function(c,d){var e=c.get("phone");return e===a?(b={model:c,index:d},!1):void 0}),b}}),m=new l,n=b.Collection.extend({model:k,initialize:function(){this.bind("add",this.addOne,!1)},addOne:function(a){var b=new q({model:a});b.render()},_remove:function(a){var b;this.each(function(c,d){c.get("name")===a.name&&(b=d)}),this.at(b).destroy()},syncPhoneStatus:function(a){var b=a.name;m.each(function(a){return a.get("name")===b?(a.set("checked",!1),!1):void 0})}}),o=new n,p=b.View.extend({events:{tap:"statusToggle"},initialize:function(){var a=this.model;a.bind("change:checked",this.checkedStatus,this)},checkedStatus:function(){var a=this.model,b=a.get("checked"),c=this.$el.one(".checkbox");b?c.addClass("selected"):c.removeClass("selected")},render:function(){var a,b=this.model.toJSON();"undefined"!=typeof b.index?(this.$el.addClass("title"),a="<div><%= index %></div>"):(this.$el.addClass("phoneItem"),a=i.phonetmp.html());var c=h.template(a,b);return this.$el.html(c),this},statusToggle:function(){var a=o.length,b=this.model.get("index");if("undefined"==typeof b){var c=this.model.get("checked");if(c)this.model.set("checked",!1),o._remove(this.model.toJSON());else{var d=this.model.get("maxSelect");d>a?(this.model.set("checked",!0),o.add(this.model.toJSON())):new e({tip:"\u6700\u591a\u53ea\u80fd\u6dfb\u52a0"+d+"\u4f4d\u597d\u53cb",type:"alert"})}}}}),q=b.View.extend({tagName:"span",events:{click:"showDel",touchstart:"press",touchend:"press"},initialize:function(){this.model.bind("destroy",this.remove,this)},press:function(a){var b=g(a.currentTarget);b.toggleClass("press")},remove:function(){this.$el.remove(),i.selectNo.html(this.model.collection.length-1),this.autoZoom(),this.changeHolder(1)},showDel:function(){var a=this,b=this.model,c=b.toJSON();new e({onConfirm:function(){a.model.collection.syncPhoneStatus(c),b.destroy()},tip:"\u53d6\u6d88\u5bf9\u6b64\u4eba\u7684\u8d60\u9001?"})},render:function(){var a=this.model.toJSON(),b=h.template("<%= name %>",a);this.changeHolder(0),i.holder.before(this.$el.html(b)),i.selectNo.html(this.model.collection.length),this.autoZoom()},changeHolder:function(a){var b=(this.model,i.holder),c=this.model.collection.length;c>a?b.attr({placeholder:""}).val("").addClass("hidden")[0].blur():b.attr({placeholder:"\u53ef\u8f93\u5165\u624b\u673a\u53f7\u7801"}).val("").removeClass("hidden")[0].blur()},autoZoom:function(){for(var a=i.showPhones.all("span"),b=0,d=g("body").width(),e=a.length;e--;)b+=a.item(e).width()+5;b+=45,C.phoneScroll.refresh(),b>d?(C.selectPhoneScroll.refresh(),C.selectPhoneScroll.scrollToElement(a[a.length-1])):C.selectPhoneScroll||(C.selectPhoneScroll=new c("showPhones",{vScrollbar:!1,bounce:!1}))}}),r=b.View.extend({el:"#wrap",pageIndex:0,events:{"click #sidebar li":"skipToIndex","click #showPhones":"showHolder","input #holder":"listen","click #delall":"delall","touchstart #delall":"press","touchend #delall":"press","touchstart #confirm":"press","touchend #confirm":"press","click #confirm":"done","click #getMore":"pushData"},initialize:function(b){var c=this,d="undefined"==typeof b.data?[]:b.data;this.pageSize="undefined"==typeof b.pageSize?50:b.pageSize;var e="undefined"==typeof b.preSelectArr?[]:b.preSelectArr;this.maxSelect="undefined"==typeof b.maxSelect?20:b.maxSelect;{var f=this.getPhoneDataNormal(d);this.normalData=f.normalData}this.buildPhoneScroll(),this.pushData(),a.later(function(){c.prevSelectPhones(e)},0)},prevSelectPhones:function(a){a&&a.forEach(function(a){var b=!1;m.each(function(c,d){var e=c.get("phone");a===e&&(b=d)}),b?(m.at(b).set("checked",!0),o.add(m.at(b).toJSON())):o.add({name:a,phone:a})}),this.trigger("readAfter")},done:function(){var a=[];return 0===o.length?(new e({tip:"\u60a8\u8fd8\u672a\u9009\u62e9\u8054\u7cfb\u4eba",type:"alert"}),void 0):(o.each(function(b){a.push(b.toJSON())}),this.trigger("selectDone",a),void 0)},press:function(a){var b=g(a.currentTarget);b.toggleClass("press")},delall:function(){new e({onConfirm:function(){for(var a=o.length;a--;)o.syncPhoneStatus(o.at(a).toJSON()),o.at(a).destroy()},tip:"\u6e05\u7a7a\u6240\u6709\u5df2\u9009\u8054\u7cfb\u4eba?"})},listen:function(a){var b=g(a.currentTarget),c=b.val(),d={};if(11===c.length){var e=m.getModelByAttr(c);e?(d.name=e.model.get("name"),m.at(e.index).set("checked",!0)):d.name=c,d.phone=c,o.add(d)}},showHolder:function(a){var b=g(a.target);b.hasClass("box")&&i.holder.removeClass("hidden").attr("placeholder","\u53ef\u8f93\u5165\u624b\u673a\u53f7\u7801")},buildPhoneScroll:function(){C.phoneScroll=new c("phones",{vScrollbar:!1})},pushData:function(){var a=this,b=[],c=this.normalData;i.loading.addClass("hidden");var d=c.length,f=Math.ceil(d/this.pageSize),g=[];if(this.pageIndex>=f)return new e({tip:"\u6ca1\u6709\u66f4\u591a\u8054\u7cfb\u4eba",type:"alert"}),void 0;var h=c.slice(this.pageIndex*this.pageSize,(this.pageIndex++ +1)*this.pageSize);h.forEach(function(c){if("string"==typeof c)b.push({index:c}),g.push(c);else for(var d in c)b.push({name:d,phone:c[d],maxSelect:a.maxSelect})}),m.add(b),this.createIndex(g)},getPhoneDataNormal:function(b){var c=[],e={},f={},g=[],h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];b.forEach(function(a){var b=new d,f=b.getFullChars(a.name[0]).toUpperCase();c.push(f[0]),"undefined"==typeof e[f[0]]&&(e[f[0]]={}),e[f[0]][a.name.length>6?a.name.substr(0,6):a.name]=a.phone}),c=a.unique(c),h.forEach(function(a){"undefined"!=typeof e[a]&&(f[a]=e[a]),c.indexOf(a)>=0&&g.push(a)});var i=[];for(var j in f){var k=f[j];i.push(j);for(var l in k){var m={};m[l]=k[l],i.push(m)}}return{normalData:i}},createIndex:function(a){var b="",c=i.sidebar;a.forEach(function(a){b+="<li>"+a+"</li>"}),c.append(b)},skipToIndex:function(a){for(var b,c=g(a.currentTarget).html(),d=i.phonesbox.find(".title"),e=d.length;e--;){var f=d.eq(e).find("div");if(f.html()===c){b=e;break}}C.phoneScroll.scrollToElement(d[b])}});return r},{requires:["gallery/backbone-lite/1.0/","gallery/gallery/contacts/1.0/iscroll","gallery/gallery/contacts/1.0/pinyin","gallery/confirm/1.0/","base"]});