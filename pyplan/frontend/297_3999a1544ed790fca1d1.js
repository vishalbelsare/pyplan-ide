/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{2166:function(e,n,t){"use strict";(function(a,s){var l,i;l=[t(219),t(2167),t(2168)],void 0===(i=function(e,n,t){return a.View.extend({render:function(e){var t=n(),a=s("#"+this.options.id);a.find(".popover-content").append(t),this.addHandlers(a,this.options)},removelightSearchNode:function(){s("#"+this.options.id).remove()},addHandlers:function(e,n){var t=this;e.find(".btnSearch").on("click",function(){t.searchNode(e,n)}),e.find("input[id='txtSearch']").on("keyup",function(a){13==a.keyCode&&t.searchNode(e,n)}).focus(),this.selectableHandlers(e)},selectableHandlers:function(e){var n=this;s("#list-items").selectonic({multi:!1,keyboard:!0,keyboardMode:"toggle",mouseMode:"standard",focusOnHover:!0,selectionBlur:!1,focusBlur:!0,select:function(e,t){var a={nodeId:t.target.getAttribute("data-id"),name:t.target.getAttribute("data-name"),moduleId:t.target.getAttribute("data-module-id"),nodeClass:t.target.getAttribute("data-class")};n.options.callback(a),n.removelightSearchNode()},unselectAll:function(e,n){}})},searchNode:function(n,a){if(s("#list-wrapper").focus(),!n.find(".btnSearch").hasClass("disabled")){var l=n.find("input[id='txtSearch']").val();if(l.length>1){n.find(".btnSearch").addClass("disabled");var i={text:l};this.options.filteredClasses&&(i.extraClasses=this.options.filteredClasses),this.options.parallelToken&&(i.parallelToken=this.options.parallelToken),(new e).searchNode(i,function(e){var a=s("#list-items");a.empty(),s.each(e,function(e,n){var a=t(n);s("#list-items").prepend(a)}),s("#list-items li").first().focus(),s("#list-items").selectonic("focus",0),a.perfectScrollbar(),n.find(".btnSearch").removeClass("disabled")},function(){n.find(".btnSearch").removeClass("disabled")})}}}})}.apply(n,l))||(e.exports=i)}).call(this,t(218),t(1))},2167:function(e,n,t){var a=t(690);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,t,a,s){return'<div class="row nopadding nomargin">\n  <div class="input-group" style="margin-bottom: 10px;">\n    <input id="txtSearch" type="text" placeholder="Node ID or Name..." class="form-control">\n    <div class="input-group-btn">\n      <button class="btn btnSearch" type="button">Search</button>\n    </div>\n  </div>\n  <div class="box">\n    <div id="list-wrapper" style="position: relative;" class="box-content nopadding">\n      <ul id="list-items" class="nodeslist">\n\n      </ul>\n    </div>\n  </div>\n</div>\n'},useData:!0})},2168:function(e,n,t){var a=t(690);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,t,a,s){var l,i=null!=n?n:e.nullContext||{},o=t.helperMissing,d="function",r=e.escapeExpression;return'<li data-id="'+r(typeof(l=null!=(l=t.id||(null!=n?n.id:n))?l:o)===d?l.call(i,{name:"id",hash:{},data:s}):l)+'" data-module-id="'+r(typeof(l=null!=(l=t.moduleId||(null!=n?n.moduleId:n))?l:o)===d?l.call(i,{name:"moduleId",hash:{},data:s}):l)+'" data-name="'+r(typeof(l=null!=(l=t.name||(null!=n?n.name:n))?l:o)===d?l.call(i,{name:"name",hash:{},data:s}):l)+'" data-class="'+r(typeof(l=null!=(l=t.nodeClass||(null!=n?n.nodeClass:n))?l:o)===d?l.call(i,{name:"nodeClass",hash:{},data:s}):l)+'">\n  <span class="node">\n    <i class="icon-'+r(typeof(l=null!=(l=t.nodeClass||(null!=n?n.nodeClass:n))?l:o)===d?l.call(i,{name:"nodeClass",hash:{},data:s}):l)+'"></i>\n    <span class="nodeTitle">'+r(typeof(l=null!=(l=t.name||(null!=n?n.name:n))?l:o)===d?l.call(i,{name:"name",hash:{},data:s}):l)+'</span>\n    <span class="nodeId">'+r(typeof(l=null!=(l=t.id||(null!=n?n.id:n))?l:o)===d?l.call(i,{name:"id",hash:{},data:s}):l)+"</span>\n  </span>\n</li>\n"},useData:!0})}}]);