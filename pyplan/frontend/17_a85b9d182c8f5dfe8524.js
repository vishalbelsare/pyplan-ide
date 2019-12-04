/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17,288],{685:function(t,e,n){"use strict";(function(s){var o,i,a=n(18);o=[n(794)],void 0===(i=function(t){return s.Controller.extend({name:"showNotify",currentProgressBar:void 0,show:function(e){var n=e.title,s=e.text,o=e.endpoint,i=e.notifyType,r=e.timeOut,l=e.buttons,u=e.showProgressBar,c=e.showFooter,d=e.callback,p=e.progressBar,h=void 0===p?null:p;if(h&&this.currentProgressBar&&this.currentProgressBar.length>0)return this.currentProgressBar.find(".toast-title").text(n),this.currentProgressBar.find(".toast-text").text(s),this.currentProgressBar.find(".progress-bar").css("width",h+"%"),void(h>=100&&(this.currentProgressBar.find(".progress").removeClass("active"),this.currentProgressBar.find("button[data-code='cancel']").text((0,a.translate)("close")),this.currentProgressBar=void 0));var f=new t({title:n,text:s,endpoint:o,notifyType:i,timeOut:r,buttons:l,showProgressBar:u,showFooter:c,callback:d,progressBar:h}).render();h&&(this.currentProgressBar=f)}})}.apply(e,o))||(t.exports=i)}).call(this,n(694))},750:function(t,e,n){var s,o;n(135),s=[n(1)],void 0===(o=function(t){return function(){function e(e,n){return e||(e=a()),(l=t("#"+e.containerId)).length?l:(n&&(l=function(e){return(l=t("<div/>").attr("id",e.containerId).addClass(e.positionClass).attr("aria-live","polite").attr("role","alert")).appendTo(t(e.target)),l}(e)),l)}function n(e){for(var n=l.children(),o=n.length-1;o>=0;o--)s(t(n[o]),e)}function s(e,n){return!(!e||0!==t(":focus",e).length||(e[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){r(e)}}),0))}function o(t){u&&u(t)}function i(n){function s(e){return!t(":focus",h).length||e?(clearTimeout(w.intervalId),h[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){r(h),i.onHidden&&"hidden"!==b.state&&i.onHidden(),b.state="hidden",b.endTime=new Date,o(b)}})):void 0}var i=a(),u=n.iconClass||i.iconClass;if(void 0!==n.optionsOverride&&(i=t.extend(i,n.optionsOverride),u=n.optionsOverride.iconClass||u),i.preventDuplicates){if(n.message===c)return;c=n.message}d++,l=e(i,!0);var p=null,h=t("<div/>"),f=t("<div/>"),g=t("<div/>"),m=t("<div/>"),v=t(i.closeHtml),w={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:d,state:"visible",startTime:new Date,options:i,map:n};return n.iconClass&&h.addClass(i.toastClass).addClass(u),n.title&&(f.append(n.title).addClass(i.titleClass),h.append(f)),n.message&&(g.append(n.message).addClass(i.messageClass),h.append(g)),i.closeButton&&(v.addClass("toast-close-button").attr("role","button"),h.prepend(v)),i.progressBar&&(m.addClass("toast-progress"),h.prepend(m)),h.hide(),i.newestOnTop?l.prepend(h):l.append(h),h[i.showMethod]({duration:i.showDuration,easing:i.showEasing,complete:i.onShown}),i.timeOut>0&&(p=setTimeout(s,i.timeOut),w.maxHideTime=parseFloat(i.timeOut),w.hideEta=(new Date).getTime()+w.maxHideTime,i.progressBar&&(w.intervalId=setInterval(function(){var t=(w.hideEta-(new Date).getTime())/w.maxHideTime*100;m.width(t+"%")},10))),h.hover(function(){clearTimeout(p),w.hideEta=0,h.stop(!0,!0)[i.showMethod]({duration:i.showDuration,easing:i.showEasing})},function(){(i.timeOut>0||i.extendedTimeOut>0)&&(p=setTimeout(s,i.extendedTimeOut),w.maxHideTime=parseFloat(i.extendedTimeOut),w.hideEta=(new Date).getTime()+w.maxHideTime)}),!i.onclick&&i.tapToDismiss&&h.click(s),i.closeButton&&v&&v.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),s(!0)}),i.onclick&&h.click(function(){i.onclick(),s()}),o(b),i.debug&&console&&console.log(b),h}function a(){return t.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1},h.options)}function r(t){l||(l=e()),t.is(":visible")||(t.remove(),t=null,0===l.children().length&&(l.remove(),c=void 0))}var l,u,c,d=0,p={error:"error",info:"info",success:"success",warning:"warning"},h={clear:function(t){var o=a();l||e(o),s(t,o)||n(o)},remove:function(n){var s=a();return l||e(s),n&&0===t(":focus",n).length?void r(n):void(l.children().length&&l.remove())},error:function(t,e,n){return i({type:p.error,iconClass:a().iconClasses.error,message:t,optionsOverride:n,title:e})},getContainer:e,info:function(t,e,n){return i({type:p.info,iconClass:a().iconClasses.info,message:t,optionsOverride:n,title:e})},options:{},subscribe:function(t){u=t},success:function(t,e,n){return i({type:p.success,iconClass:a().iconClasses.success,message:t,optionsOverride:n,title:e})},version:"2.1.0",warning:function(t,e,n){return i({type:p.warning,iconClass:a().iconClasses.warning,message:t,optionsOverride:n,title:e})}};return h}()}.apply(e,s))||(t.exports=o)},794:function(t,e,n){"use strict";(function(s,o){var i,a,r=function(t){return t&&t.__esModule?t:{default:t}}(n(750));i=[n(795)],void 0===(a=function(t){return s.View.extend({el:o("#main"),currentProgressBar:void 0,defaults:{notifyType:"info",timeOut:3e3},initialize:function(){this.options=o.extend({},this.defaults,this.options)},render:function(){(this.options.buttons||this.options.progressBar)&&(this.options.showFooter=!0,this.options.progressBar&&(this.options.showProgressBar=!0));var e=t(this.options);r.default.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:this.options.timeOut?this.options.timeOut:__currentSession.notificationTimeOut,extendedTimeOut:0,showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut",tapToDismiss:!1};var n=r.default[this.options.notifyType](e,this.options.title);this.options.notifyClass&&n.addClass(this.options.notifyClass);var s=this;return n.find(".footer-area button").click(function(){var t=!0;return s.options.callback&&!1===s.options.callback.call(this,o(this).attr("data-code"),n)&&(t=!1),t&&n.find(".toast-close-button").click(),!1}),n}})}.apply(e,i))||(t.exports=a)}).call(this,n(218),n(1))},795:function(t,e,n){var s=n(690);t.exports=(s.default||s).template({1:function(t,e,n,s,o){var i,a=null!=e?e:t.nullContext||{};return'<div class="footer-area">\n'+(null!=(i=n.if.call(a,null!=e?e.showProgressBar:e,{name:"if",hash:{},fn:t.program(2,o,0),inverse:t.noop,data:o}))?i:"")+"\n"+(null!=(i=n.each.call(a,null!=e?e.buttons:e,{name:"each",hash:{},fn:t.program(4,o,0),inverse:t.noop,data:o}))?i:"")+"\n</div>\n"},2:function(t,e,n,s,o){var i;return'  <div class="progress progress-striped active">\n    <div class="progress-bar progress-bar-warning" style="width: '+t.escapeExpression("function"==typeof(i=null!=(i=n.progressBar||(null!=e?e.progressBar:e))?i:n.helperMissing)?i.call(null!=e?e:t.nullContext||{},{name:"progressBar",hash:{},data:o}):i)+'%"></div>\n  </div>\n'},4:function(t,e,n,s,o){var i,a=null!=e?e:t.nullContext||{},r=n.helperMissing,l=t.escapeExpression;return'  <button class="btn btn-mini btn-'+l("function"==typeof(i=null!=(i=n.css||(null!=e?e.css:e))?i:r)?i.call(a,{name:"css",hash:{},data:o}):i)+'" data-code="'+l("function"==typeof(i=null!=(i=n.code||(null!=e?e.code:e))?i:r)?i.call(a,{name:"code",hash:{},data:o}):i)+'">'+l("function"==typeof(i=null!=(i=n.title||(null!=e?e.title:e))?i:r)?i.call(a,{name:"title",hash:{},data:o}):i)+"</button>\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,s,o){var i,a,r=null!=e?e:t.nullContext||{},l=n.helperMissing;return'<span class="toast-text">\n  <div>\n    '+(null!=(i="function"==typeof(a=null!=(a=n.text||(null!=e?e.text:e))?a:l)?a.call(r,{name:"text",hash:{},data:o}):a)?i:"")+"\n  </div>\n  <div>\n    "+(null!=(i="function"==typeof(a=null!=(a=n.endpoint||(null!=e?e.endpoint:e))?a:l)?a.call(r,{name:"endpoint",hash:{},data:o}):a)?i:"")+"\n  </div>\n</span>\n"+(null!=(i=n.if.call(r,null!=e?e.showFooter:e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?i:"")},useData:!0})}}]);