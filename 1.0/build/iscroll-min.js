/*!build time : 2013-11-04 5:16:14 PM*/
KISSY.add("gallery/contacts/1.0/iscroll",function(){return function(){var a=Math,b=function(a){return a>>0},c=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":/trident/i.test(navigator.userAgent)?"ms":"opera"in window?"O":"",d=/android/gi.test(navigator.appVersion),e=/iphone|ipad/gi.test(navigator.appVersion),f=/playbook/gi.test(navigator.appVersion),g=/hp-tablet/gi.test(navigator.appVersion),h="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,i="ontouchstart"in window&&!g,j=c+"Transform"in document.documentElement.style,k=e||f,l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1)}}(),m=function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),n="onorientationchange"in window?"orientationchange":"resize",o=i?"touchstart":"mousedown",p=i?"touchmove":"mousemove",q=i?"touchend":"mouseup",r=i?"touchcancel":"mouseup",s="Moz"==c?"DOMMouseScroll":"mousewheel",t="translate"+(h?"3d(":"("),u=h?",0)":")",v=function(a,b){var f,g=this,l=document;g.wrapper="object"==typeof a?a:l.getElementById(a),g.wrapper.style.overflow="hidden",g.scroller=g.wrapper.children[0],g.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:d,hideScrollbar:e,fadeScrollbar:e&&h,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){if(a.explicitOriginalTarget)var b=a.explicitOriginalTarget.nodeName.toLowerCase();else var b=a.target?a.target.nodeName.toLowerCase():"";"select"!=b&&"option"!=b&&"input"!=b&&"textarea"!=b&&a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(f in b)g.options[f]=b[f];g.x=g.options.x,g.y=g.options.y,g.options.useTransform=j?g.options.useTransform:!1,g.options.hScrollbar=g.options.hScroll&&g.options.hScrollbar,g.options.vScrollbar=g.options.vScroll&&g.options.vScrollbar,g.options.zoom=g.options.useTransform&&g.options.zoom,g.options.useTransition=k&&g.options.useTransition,g.options.zoom&&d&&(t="translate(",u=")"),g.scroller.style[c+"TransitionProperty"]=g.options.useTransform?"-"+c.toLowerCase()+"-transform":"top left",g.scroller.style[c+"TransitionDuration"]="0",g.scroller.style[c+"TransformOrigin"]="0 0",g.options.useTransition&&(g.scroller.style[c+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)"),g.options.useTransform?g.scroller.style[c+"Transform"]=t+g.x+"px,"+g.y+"px"+u:g.scroller.style.cssText+=";position:absolute;top:"+g.y+"px;left:"+g.x+"px",g.options.useTransition&&(g.options.fixedScrollbar=!0),g.refresh(),g._bind(n,window),g._bind(o),i||(g._bind("mouseout",g.wrapper),"none"!=g.options.wheelAction&&g._bind(s)),g.options.checkDOMChanges&&(g.checkDOMTime=setInterval(function(){g._checkDOMChanges()},500))};v.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(a){var b=this;switch(a.type){case o:if(!i&&0!==a.button)return;b._start(a);break;case p:b._move(a);break;case q:case r:b._end(a);break;case n:b._resize();break;case s:b._wheel(a);break;case"mouseout":b._mouseout(a);break;case"webkitTransitionEnd":b._transitionEnd(a)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(d){var e,f=this,g=document;return f[d+"Scrollbar"]?(f[d+"ScrollbarWrapper"]||(e=g.createElement("div"),f.options.scrollbarClass?e.className=f.options.scrollbarClass+d.toUpperCase():e.style.cssText="position:absolute;z-index:100;"+("h"==d?"height:7px;bottom:1px;left:2px;right:"+(f.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(f.hScrollbar?"7":"2")+"px;top:2px;right:1px"),e.style.cssText+=";pointer-events:none;-"+c+"-transition-property:opacity;-"+c+"-transition-duration:"+(f.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(f.options.hideScrollbar?"0":"1"),f.wrapper.appendChild(e),f[d+"ScrollbarWrapper"]=e,e=g.createElement("div"),f.options.scrollbarClass||(e.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+c+"-background-clip:padding-box;-"+c+"-box-sizing:border-box;"+("h"==d?"height:100%":"width:100%")+";-"+c+"-border-radius:3px;border-radius:3px"),e.style.cssText+=";pointer-events:none;-"+c+"-transition-property:-"+c+"-transform;-"+c+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+c+"-transition-duration:0;-"+c+"-transform:"+t+"0,0"+u,f.options.useTransition&&(e.style.cssText+=";-"+c+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),f[d+"ScrollbarWrapper"].appendChild(e),f[d+"ScrollbarIndicator"]=e),"h"==d?(f.hScrollbarSize=f.hScrollbarWrapper.clientWidth,f.hScrollbarIndicatorSize=a.max(b(f.hScrollbarSize*f.hScrollbarSize/f.scrollerW),8),f.hScrollbarIndicator.style.width=f.hScrollbarIndicatorSize+"px",f.hScrollbarMaxScroll=f.hScrollbarSize-f.hScrollbarIndicatorSize,f.hScrollbarProp=f.hScrollbarMaxScroll/f.maxScrollX):(f.vScrollbarSize=f.vScrollbarWrapper.clientHeight,f.vScrollbarIndicatorSize=a.max(b(f.vScrollbarSize*f.vScrollbarSize/f.scrollerH),8),f.vScrollbarIndicator.style.height=f.vScrollbarIndicatorSize+"px",f.vScrollbarMaxScroll=f.vScrollbarSize-f.vScrollbarIndicatorSize,f.vScrollbarProp=f.vScrollbarMaxScroll/f.maxScrollY),f._scrollbarPos(d,!0),void 0):(f[d+"ScrollbarWrapper"]&&(j&&(f[d+"ScrollbarIndicator"].style[c+"Transform"]=""),f[d+"ScrollbarWrapper"].parentNode.removeChild(f[d+"ScrollbarWrapper"]),f[d+"ScrollbarWrapper"]=null,f[d+"ScrollbarIndicator"]=null),void 0)},_resize:function(){var a=this;setTimeout(function(){a.refresh()},d?200:0)},_pos:function(a,d){a=this.hScroll?a:0,d=this.vScroll?d:0,this.options.useTransform?this.scroller.style[c+"Transform"]=t+a+"px,"+d+"px"+u+" scale("+this.scale+")":(a=b(a),d=b(d),this.scroller.style.left=a+"px",this.scroller.style.top=d+"px"),this.x=a,this.y=d,this._scrollbarPos("h"),this._scrollbarPos("v")},_scrollbarPos:function(a,d){var e,f=this,g="h"==a?f.x:f.y;f[a+"Scrollbar"]&&(g=f[a+"ScrollbarProp"]*g,0>g?(f.options.fixedScrollbar||(e=f[a+"ScrollbarIndicatorSize"]+b(3*g),8>e&&(e=8),f[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=e+"px"),g=0):g>f[a+"ScrollbarMaxScroll"]&&(f.options.fixedScrollbar?g=f[a+"ScrollbarMaxScroll"]:(e=f[a+"ScrollbarIndicatorSize"]-b(3*(g-f[a+"ScrollbarMaxScroll"])),8>e&&(e=8),f[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=e+"px",g=f[a+"ScrollbarMaxScroll"]+(f[a+"ScrollbarIndicatorSize"]-e))),f[a+"ScrollbarWrapper"].style[c+"TransitionDelay"]="0",f[a+"ScrollbarWrapper"].style.opacity=d&&f.options.hideScrollbar?"0":"1",f[a+"ScrollbarIndicator"].style[c+"Transform"]=t+("h"==a?g+"px,0":"0,"+g+"px")+u)},_start:function(b){var d,e,f,g,h,j=this,k=i?b.touches[0]:b;j.enabled&&(j.options.onBeforeScrollStart&&j.options.onBeforeScrollStart.call(j,b),(j.options.useTransition||j.options.zoom)&&j._transitionTime(0),j.moved=!1,j.animating=!1,j.zoomed=!1,j.distX=0,j.distY=0,j.absDistX=0,j.absDistY=0,j.dirX=0,j.dirY=0,j.options.zoom&&i&&b.touches.length>1&&(g=a.abs(b.touches[0].pageX-b.touches[1].pageX),h=a.abs(b.touches[0].pageY-b.touches[1].pageY),j.touchesDistStart=a.sqrt(g*g+h*h),j.originX=a.abs(b.touches[0].pageX+b.touches[1].pageX-2*j.wrapperOffsetLeft)/2-j.x,j.originY=a.abs(b.touches[0].pageY+b.touches[1].pageY-2*j.wrapperOffsetTop)/2-j.y,j.options.onZoomStart&&j.options.onZoomStart.call(j,b)),j.options.momentum&&(j.options.useTransform?(d=getComputedStyle(j.scroller,null)[c+"Transform"].replace(/[^0-9-.,]/g,"").split(","),e=1*d[4],f=1*d[5]):(e=1*getComputedStyle(j.scroller,null).left.replace(/[^0-9-]/g,""),f=1*getComputedStyle(j.scroller,null).top.replace(/[^0-9-]/g,"")),(e!=j.x||f!=j.y)&&(j.options.useTransition?j._unbind("webkitTransitionEnd"):m(j.aniTime),j.steps=[],j._pos(e,f))),j.absStartX=j.x,j.absStartY=j.y,j.startX=j.x,j.startY=j.y,j.pointX=k.pageX,j.pointY=k.pageY,j.startTime=b.timeStamp||Date.now(),j.options.onScrollStart&&j.options.onScrollStart.call(j,b),j._bind(p),j._bind(q),j._bind(r))},_move:function(b){var d,e,f,g=this,h=i?b.touches[0]:b,j=h.pageX-g.pointX,k=h.pageY-g.pointY,l=g.x+j,m=g.y+k,n=b.timeStamp||Date.now();return g.options.onBeforeScrollMove&&g.options.onBeforeScrollMove.call(g,b),g.options.zoom&&i&&b.touches.length>1?(d=a.abs(b.touches[0].pageX-b.touches[1].pageX),e=a.abs(b.touches[0].pageY-b.touches[1].pageY),g.touchesDist=a.sqrt(d*d+e*e),g.zoomed=!0,f=1/g.touchesDistStart*g.touchesDist*this.scale,f<g.options.zoomMin?f=.5*g.options.zoomMin*Math.pow(2,f/g.options.zoomMin):f>g.options.zoomMax&&(f=2*g.options.zoomMax*Math.pow(.5,g.options.zoomMax/f)),g.lastScale=f/this.scale,l=this.originX-this.originX*g.lastScale+this.x,m=this.originY-this.originY*g.lastScale+this.y,this.scroller.style[c+"Transform"]=t+l+"px,"+m+"px"+u+" scale("+f+")",g.options.onZoom&&g.options.onZoom.call(g,b),void 0):(g.pointX=h.pageX,g.pointY=h.pageY,(l>0||l<g.maxScrollX)&&(l=g.options.bounce?g.x+j/2:l>=0||g.maxScrollX>=0?0:g.maxScrollX),(m>g.minScrollY||m<g.maxScrollY)&&(m=g.options.bounce?g.y+k/2:m>=g.minScrollY||g.maxScrollY>=0?g.minScrollY:g.maxScrollY),g.distX+=j,g.distY+=k,g.absDistX=a.abs(g.distX),g.absDistY=a.abs(g.distY),g.absDistX<6&&g.absDistY<6||(g.options.lockDirection&&(g.absDistX>g.absDistY+5?(m=g.y,k=0):g.absDistY>g.absDistX+5&&(l=g.x,j=0)),g.moved=!0,g._pos(l,m),g.dirX=j>0?-1:0>j?1:0,g.dirY=k>0?-1:0>k?1:0,n-g.startTime>300&&(g.startTime=n,g.startX=g.x,g.startY=g.y),g.options.onScrollMove&&g.options.onScrollMove.call(g,b)),void 0)},_end:function(d){if(!i||0==d.touches.length){var e,f,g,h,j,k,l,m=this,n=i?d.changedTouches[0]:d,o={dist:0,time:0},s={dist:0,time:0},v=(d.timeStamp||Date.now())-m.startTime,w=m.x,x=m.y;if(m._unbind(p),m._unbind(q),m._unbind(r),m.options.onBeforeScrollEnd&&m.options.onBeforeScrollEnd.call(m,d),m.zoomed)return l=m.scale*m.lastScale,l=Math.max(m.options.zoomMin,l),l=Math.min(m.options.zoomMax,l),m.lastScale=l/m.scale,m.scale=l,m.x=m.originX-m.originX*m.lastScale+m.x,m.y=m.originY-m.originY*m.lastScale+m.y,m.scroller.style[c+"TransitionDuration"]="200ms",m.scroller.style[c+"Transform"]=t+m.x+"px,"+m.y+"px"+u+" scale("+m.scale+")",m.zoomed=!1,m.refresh(),m.options.onZoomEnd&&m.options.onZoomEnd.call(m,d),void 0;if(!m.moved)return i&&(m.doubleTapTimer&&m.options.zoom?(clearTimeout(m.doubleTapTimer),m.doubleTapTimer=null,m.options.onZoomStart&&m.options.onZoomStart.call(m,d),m.zoom(m.pointX,m.pointY,1==m.scale?m.options.doubleTapZoom:1),m.options.onZoomEnd&&setTimeout(function(){m.options.onZoomEnd.call(m,d)},200)):m.doubleTapTimer=setTimeout(function(){for(m.doubleTapTimer=null,e=n.target;1!=e.nodeType;)e=e.parentNode;"SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&(f=document.createEvent("MouseEvents"),f.initMouseEvent("click",!0,!0,d.view,1,n.screenX,n.screenY,n.clientX,n.clientY,d.ctrlKey,d.altKey,d.shiftKey,d.metaKey,0,null),f._fake=!0,e.dispatchEvent(f))},m.options.zoom?250:0)),m._resetPos(200),m.options.onTouchEnd&&m.options.onTouchEnd.call(m,d),void 0;if(300>v&&m.options.momentum&&(o=w?m._momentum(w-m.startX,v,-m.x,m.scrollerW-m.wrapperW+m.x,m.options.bounce?m.wrapperW:0):o,s=x?m._momentum(x-m.startY,v,-m.y,m.maxScrollY<0?m.scrollerH-m.wrapperH+m.y-m.minScrollY:0,m.options.bounce?m.wrapperH:0):s,w=m.x+o.dist,x=m.y+s.dist,(m.x>0&&w>0||m.x<m.maxScrollX&&w<m.maxScrollX)&&(o={dist:0,time:0}),(m.y>m.minScrollY&&x>m.minScrollY||m.y<m.maxScrollY&&x<m.maxScrollY)&&(s={dist:0,time:0})),o.dist||s.dist)return j=a.max(a.max(o.time,s.time),10),m.options.snap&&(g=w-m.absStartX,h=x-m.absStartY,a.abs(g)<m.options.snapThreshold&&a.abs(h)<m.options.snapThreshold?m.scrollTo(m.absStartX,m.absStartY,200):(k=m._snap(w,x),w=k.x,x=k.y,j=a.max(k.time,j))),m.scrollTo(b(w),b(x),j),m.options.onTouchEnd&&m.options.onTouchEnd.call(m,d),void 0;if(m.options.snap)return g=w-m.absStartX,h=x-m.absStartY,a.abs(g)<m.options.snapThreshold&&a.abs(h)<m.options.snapThreshold?m.scrollTo(m.absStartX,m.absStartY,200):(k=m._snap(m.x,m.y),(k.x!=m.x||k.y!=m.y)&&m.scrollTo(k.x,k.y,k.time)),m.options.onTouchEnd&&m.options.onTouchEnd.call(m,d),void 0;m._resetPos(200),m.options.onTouchEnd&&m.options.onTouchEnd.call(m,d)}},_resetPos:function(a){var b=this,d=b.x>=0?0:b.x<b.maxScrollX?b.maxScrollX:b.x,e=b.y>=b.minScrollY||b.maxScrollY>0?b.minScrollY:b.y<b.maxScrollY?b.maxScrollY:b.y;return d==b.x&&e==b.y?(b.moved&&(b.moved=!1,b.options.onScrollEnd&&b.options.onScrollEnd.call(b)),b.hScrollbar&&b.options.hideScrollbar&&("webkit"==c&&(b.hScrollbarWrapper.style[c+"TransitionDelay"]="300ms"),b.hScrollbarWrapper.style.opacity="0"),b.vScrollbar&&b.options.hideScrollbar&&("webkit"==c&&(b.vScrollbarWrapper.style[c+"TransitionDelay"]="300ms"),b.vScrollbarWrapper.style.opacity="0"),void 0):(b.scrollTo(d,e,a||0),void 0)},_wheel:function(a){var b,c,d,e,f,g=this;if("wheelDeltaX"in a)b=a.wheelDeltaX/12,c=a.wheelDeltaY/12;else if("wheelDelta"in a)b=c=a.wheelDelta/12;else{if(!("detail"in a))return;b=c=3*-a.detail}return"zoom"==g.options.wheelAction?(f=g.scale*Math.pow(2,1/3*(c?c/Math.abs(c):0)),f<g.options.zoomMin&&(f=g.options.zoomMin),f>g.options.zoomMax&&(f=g.options.zoomMax),f!=g.scale&&(!g.wheelZoomCount&&g.options.onZoomStart&&g.options.onZoomStart.call(g,a),g.wheelZoomCount++,g.zoom(a.pageX,a.pageY,f,400),setTimeout(function(){g.wheelZoomCount--,!g.wheelZoomCount&&g.options.onZoomEnd&&g.options.onZoomEnd.call(g,a)},400)),void 0):(d=g.x+b,e=g.y+c,d>0?d=0:d<g.maxScrollX&&(d=g.maxScrollX),e>g.minScrollY?e=g.minScrollY:e<g.maxScrollY&&(e=g.maxScrollY),g.scrollTo(d,e,0),void 0)},_mouseout:function(a){var b=a.relatedTarget;if(!b)return this._end(a),void 0;for(;b=b.parentNode;)if(b==this.wrapper)return;this._end(a)},_transitionEnd:function(a){var b=this;a.target==b.scroller&&(b._unbind("webkitTransitionEnd"),b._startAni())},_startAni:function(){var b,c,d,e=this,f=e.x,g=e.y,h=Date.now();if(!e.animating){if(!e.steps.length)return e._resetPos(400),void 0;if(b=e.steps.shift(),b.x==f&&b.y==g&&(b.time=0),e.animating=!0,e.moved=!0,e.options.useTransition)return e._transitionTime(b.time),e._pos(b.x,b.y),e.animating=!1,b.time?e._bind("webkitTransitionEnd"):e._resetPos(0),void 0;d=function(){var i,j,k=Date.now();return k>=h+b.time?(e._pos(b.x,b.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),e._startAni(),void 0):(k=(k-h)/b.time-1,c=a.sqrt(1-k*k),i=(b.x-f)*c+f,j=(b.y-g)*c+g,e._pos(i,j),e.animating&&(e.aniTime=l(d)),void 0)},d()}},_transitionTime:function(a){a+="ms",this.scroller.style[c+"TransitionDuration"]=a,this.hScrollbar&&(this.hScrollbarIndicator.style[c+"TransitionDuration"]=a),this.vScrollbar&&(this.vScrollbarIndicator.style[c+"TransitionDuration"]=a)},_momentum:function(c,d,e,f,g){var h=6e-4,i=a.abs(c)/d,j=i*i/(2*h),k=0,l=0;return c>0&&j>e?(l=g/(6/(j/i*h)),e+=l,i=i*e/j,j=e):0>c&&j>f&&(l=g/(6/(j/i*h)),f+=l,i=i*f/j,j=f),j*=0>c?-1:1,k=i/h,{dist:j,time:b(k)}},_offset:function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return a!=this.wrapper&&(b*=this.scale,c*=this.scale),{left:b,top:c}},_snap:function(c,d){var e,f,g,h,i,j,k=this;for(g=k.pagesX.length-1,e=0,f=k.pagesX.length;f>e;e++)if(c>=k.pagesX[e]){g=e;break}for(g==k.currPageX&&g>0&&k.dirX<0&&g--,c=k.pagesX[g],i=a.abs(c-k.pagesX[k.currPageX]),i=i?a.abs(k.x-c)/i*500:0,k.currPageX=g,g=k.pagesY.length-1,e=0;g>e;e++)if(d>=k.pagesY[e]){g=e;break}return g==k.currPageY&&g>0&&k.dirY<0&&g--,d=k.pagesY[g],j=a.abs(d-k.pagesY[k.currPageY]),j=j?a.abs(k.y-d)/j*500:0,k.currPageY=g,h=b(a.max(i,j))||200,{x:c,y:d,time:h}},_bind:function(a,b,c){(b||this.scroller).addEventListener(a,this,!!c)},_unbind:function(a,b,c){(b||this.scroller).removeEventListener(a,this,!!c)},destroy:function(){var a=this;a.scroller.style[c+"Transform"]="",a.hScrollbar=!1,a.vScrollbar=!1,a._scrollbar("h"),a._scrollbar("v"),a._unbind(n,window),a._unbind(o),a._unbind(p),a._unbind(q),a._unbind(r),a.options.hasTouch||(a._unbind("mouseout",a.wrapper),a._unbind(s)),a.options.useTransition&&a._unbind("webkitTransitionEnd"),a.options.checkDOMChanges&&clearInterval(a.checkDOMTime),a.options.onDestroy&&a.options.onDestroy.call(a)},refresh:function(){var a,d,e,f,g=this,h=0,i=0;if(g.scale<g.options.zoomMin&&(g.scale=g.options.zoomMin),g.wrapperW=g.wrapper.clientWidth||1,g.wrapperH=g.wrapper.clientHeight||1,g.minScrollY=-g.options.topOffset||0,g.scrollerW=b(g.scroller.offsetWidth*g.scale),g.scrollerH=b((g.scroller.offsetHeight+g.minScrollY)*g.scale),g.maxScrollX=g.wrapperW-g.scrollerW,g.maxScrollY=g.wrapperH-g.scrollerH+g.minScrollY,g.dirX=0,g.dirY=0,g.options.onRefresh&&g.options.onRefresh.call(g),g.hScroll=g.options.hScroll&&g.maxScrollX<0,g.vScroll=g.options.vScroll&&(!g.options.bounceLock&&!g.hScroll||g.scrollerH>g.wrapperH),g.hScrollbar=g.hScroll&&g.options.hScrollbar,g.vScrollbar=g.vScroll&&g.options.vScrollbar&&g.scrollerH>g.wrapperH,a=g._offset(g.wrapper),g.wrapperOffsetLeft=-a.left,g.wrapperOffsetTop=-a.top,"string"==typeof g.options.snap)for(g.pagesX=[],g.pagesY=[],f=g.scroller.querySelectorAll(g.options.snap),d=0,e=f.length;e>d;d++)h=g._offset(f[d]),h.left+=g.wrapperOffsetLeft,h.top+=g.wrapperOffsetTop,g.pagesX[d]=h.left<g.maxScrollX?g.maxScrollX:h.left*g.scale,g.pagesY[d]=h.top<g.maxScrollY?g.maxScrollY:h.top*g.scale;else if(g.options.snap){for(g.pagesX=[];h>=g.maxScrollX;)g.pagesX[i]=h,h-=g.wrapperW,i++;for(g.maxScrollX%g.wrapperW&&(g.pagesX[g.pagesX.length]=g.maxScrollX-g.pagesX[g.pagesX.length-1]+g.pagesX[g.pagesX.length-1]),h=0,i=0,g.pagesY=[];h>=g.maxScrollY;)g.pagesY[i]=h,h-=g.wrapperH,i++;g.maxScrollY%g.wrapperH&&(g.pagesY[g.pagesY.length]=g.maxScrollY-g.pagesY[g.pagesY.length-1]+g.pagesY[g.pagesY.length-1])}g._scrollbar("h"),g._scrollbar("v"),g.zoomed||(g.scroller.style[c+"TransitionDuration"]="0",g._resetPos(200))},scrollTo:function(a,b,c,d){var e,f,g=this,h=a;for(g.stop(),h.length||(h=[{x:a,y:b,time:c,relative:d}]),e=0,f=h.length;f>e;e++)h[e].relative&&(h[e].x=g.x-h[e].x,h[e].y=g.y-h[e].y),g.steps.push({x:h[e].x,y:h[e].y,time:h[e].time||0});g._startAni()},scrollToElement:function(b,c){var d,e=this;b=b.nodeType?b:e.scroller.querySelector(b),b&&(d=e._offset(b),d.left+=e.wrapperOffsetLeft,d.top+=e.wrapperOffsetTop,d.left=d.left>0?0:d.left<e.maxScrollX?e.maxScrollX:d.left,d.top=d.top>e.minScrollY?e.minScrollY:d.top<e.maxScrollY?e.maxScrollY:d.top,c=void 0===c?a.max(2*a.abs(d.left),2*a.abs(d.top)):c,e.scrollTo(d.left,d.top,c))},scrollToPage:function(a,b,c){var d,e,f=this;c=void 0===c?400:c,f.options.onScrollStart&&f.options.onScrollStart.call(f),f.options.snap?(a="next"==a?f.currPageX+1:"prev"==a?f.currPageX-1:a,b="next"==b?f.currPageY+1:"prev"==b?f.currPageY-1:b,a=0>a?0:a>f.pagesX.length-1?f.pagesX.length-1:a,b=0>b?0:b>f.pagesY.length-1?f.pagesY.length-1:b,f.currPageX=a,f.currPageY=b,d=f.pagesX[a],e=f.pagesY[b]):(d=-f.wrapperW*a,e=-f.wrapperH*b,d<f.maxScrollX&&(d=f.maxScrollX),e<f.maxScrollY&&(e=f.maxScrollY)),f.scrollTo(d,e,c)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(p),this._unbind(q),this._unbind(r)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind("webkitTransitionEnd"):m(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(a,b,d,e){var f=this,g=d/f.scale;f.options.useTransform&&(f.zoomed=!0,e=void 0===e?200:e,a=a-f.wrapperOffsetLeft-f.x,b=b-f.wrapperOffsetTop-f.y,f.x=a-a*g+f.x,f.y=b-b*g+f.y,f.scale=d,f.refresh(),f.x=f.x>0?0:f.x<f.maxScrollX?f.maxScrollX:f.x,f.y=f.y>f.minScrollY?f.minScrollY:f.y<f.maxScrollY?f.maxScrollY:f.y,f.scroller.style[c+"TransitionDuration"]=e+"ms",f.scroller.style[c+"Transform"]=t+f.x+"px,"+f.y+"px"+u+" scale("+d+")",f.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},"undefined"!=typeof exports?exports.iScroll=v:window.iScroll=v}(),iScroll});