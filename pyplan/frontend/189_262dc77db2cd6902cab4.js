/*! Copyright Pyplan 2020. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1011:function(t,e,i){var r=i(690);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,i,r,n){return'<div class="indicator">\n\n    <i class=""></i>\n    <span class="value"></span>\n    <span class="unit"></span>\n    \n</div>'},useData:!0})},1213:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1213},1631:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1631},1644:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1644},1649:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1649},1720:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1720},1746:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=1746},707:function(t,e){t.exports=function(){return""}},908:function(t,e,i){"use strict";(function(r,n){var a,s,o=i(18),u=function(t){if(t&&t.__esModule)return t;var e=l();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=r?Object.getOwnPropertyDescriptor(t,n):null;a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=t[n]}}i.default=t,e&&e.set(t,i);return i}(i(1514));function l(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}a=[i(720),i(707),i(1011)],void 0===(s=function(t,e,a){return t.extend({el:r("#n_o_n_e"),currentValue:void 0,detailDraggable:!1,render:function(t){this.baseRender(t),this.drawItem()},drawItem:function(){var t=e();r(this.tagId).find(".item-area").html(t),this.drawIndicator(r(this.tagId).find(".item-area").first())},onRemoveItemView:function(){this.currentValue=null},preEvaluateNode:function(t,e,i,r){this.ensureOnlyDims(e,i,r)},updateValues:function(t){this.drawIndicator(r(this.tagId).find(".item-area").first(),t)},drawIndicator:function(t,e){this.currentResult&&this.currentResult.itemProperties.detail&&this.currentResult.itemProperties.detail&&(this.currentResult.itemProperties.detail=!1);var i=a();if(t.html(i),void 0==e&&this.currentResult&&(e=this.currentResult.nodeResult),e){if(e.series.length>0&&e.series[0].data.length>0){var r=this.sumarizeValue(e);this.currentValue=r}e.nodeProperties&&e.nodeProperties.unit&&t.find(".indicator .unit").html(e.nodeProperties.unit),this.applyStyles()}},getOptionsMenu:function(){var t=this,e={callback:function(e){switch(e){case"_knowledge":t.openDocumentationModal();break;case"_workflow":t.addTask();break;case"_view_in_diagram":t.viewInDiagram()}},items:{}};return e.items._knowledge={type:"icon_text",name:(0,o.translate)("documentation"),iconClass:"fa fa-graduation-cap"},(0,o.haveAnyAccess)("LISTASSIGNEDWORKFLOWTASKS,LISTALLWORKFLOWTASKS")&&(e.items._workflow={type:"icon_text",name:(0,o.translate)("workflow"),iconClass:"fa fa-tasks"}),(0,o.haveAccess)("view_influence_diagram")&&(e.items._view_in_diagram={type:"icon_text",name:(0,o.translate)("view_in_diagram"),iconClass:"fa fa-sitemap"}),t.fromEmbedded&&(delete e.items._knowledge,delete e.items._workflow,delete e.items._view_in_diagram),e},addTask:function(){var t=this;i.e(10).then(function(){var e=[i(703)];(function(e){(new e).showAddTaskForNode(t.currentNodeId)}).apply(null,e)}).catch(i.oe)},applyDefaultProperties:function(t){return r.extend({},{styleLibrary:"",fontSize:13,fontColor:"#000",fontBold:!1,fontItalic:!1,fontUnderline:!1,numberFormat:",.",decimalPlaces:2},t)},setFontSize:function(t){this.updateTableStyle("fontSize",t)},setFontStyle:function(t,e){this.updateTableStyle("font"+t,e)},setFontColor:function(t){this.updateTableStyle("fontColor",t)},setStyleLibrary:function(t){this.updateTableStyle("styleLibrary",t)},setHtmlPre:function(t,e){this.updateTableStyle(t,e)},updateTableStyle:function(t,e,i){var r=this.applyDefaultProperties(this.currentResult.itemProperties.indicator);r[t]=e,this.currentResult.itemProperties.indicator=r,i||this.applyStyles()},getStylesUsed:function(){var t=[];return this.currentResult&&this.currentResult.itemProperties&&this.currentResult.itemProperties.indicator&&this.currentResult.itemProperties.indicator.styleLibrary&&""!=this.currentResult.itemProperties.indicator.styleLibrary&&t.push(this.currentResult.itemProperties.indicator.styleLibrary),t},updateStyleLibraries:function(t){this.applyStyles()},isPlotly:function(t){return t&&"string"==typeof t&&t.indexOf("plotly-graph-div")>0},isBokeh:function(t){return t&&"string"==typeof t&&t.indexOf("#bokeh-id#")>0},isHTML:function(t){if(t&&"string"==typeof t){var e=t.toLowerCase();if(e.indexOf("<html")>0&&e.indexOf("<body")>0)return!0}return!1},isURL:function(t){if(t&&"string"==typeof t){var e=t.toLowerCase();if(e.startsWith("http://")||e.startsWith("https://"))return!0}return!1},updateSize:function(){this.isPlotly(this.currentValue)?this.updatePlotySize():this.isHTML(this.currentValue)||this.isURL(this.currentValue)?this.updateHTMLSize():this.isBokeh(this.currentValue)?this.updateBokehSize():(String(this.currentValue).includes("pyplan-autosize")&&this.updateClassAutosize(),this.applyStyles())},updatePlotySize:function(){var t=r(this.tagId).find(".item-area").width()-20,e=r(this.tagId).find(".item-area").height()-38;r(this.tagId).find(".plotly-graph-div").each(function(i,a){var s=r(this).attr("id");n.relayout(s,{height:e,width:t})})},updateBokehSize:function(){var t=r(this.tagId).find(".item-area").width()-10,e=r(this.tagId).find(".item-area").height();r(this.tagId).find(".bk-root").css("width",t).css("height",e),window.dispatchEvent(new Event("resize"))},updateHTMLSize:function(){var t=r(this.tagId).find(".item-area").width()-10,e=r(this.tagId).find(".item-area").height();r(this.tagId).find("iframe").css("width",t).css("height",e)},updateClassAutosize:function(){var t=r(this.tagId).find(".item-area"),e=t.width()-10,i=t.height();r(this.tagId).find(".pyplan-autosize").css("max-width",e).css("max-height",i)},applyStyles:function(){if(this.currentResult&&this.currentResult.itemProperties){var t=r(this.tagId).find(".item-area .indicator span.value"),e=this.currentValue;if(this.isPlotly(this.currentValue))t.html(e),this.updatePlotySize();else if(this.isHTML(this.currentValue)||this.isURL(this.currentValue))t.find("iframe").length>0&&t.find("iframe").remove(),r("<iframe/>").css("border","none").appendTo(t),this.isURL(this.currentValue)?t.find("iframe").attr("src",e):t.find("iframe").attr("srcdoc",e),this.updateHTMLSize();else if(this.isBokeh(this.currentValue)){var i=r.uuid(),n='<div class="bk-root" id="'.concat(i,'"></div>'),a=String(this.currentValue).replace("#bokeh-id#",i).replace("BOKEH:","");t.html(n),this.updateBokehSize(),u.embed.embed_item(JSON.parse(a))}else{var s=r(this.tagId).find(".item-area .indicator span"),o=r(this.tagId).find(".item-area .indicator i");o.attr("class",""),this.createFormatter();var l=""+this.currentValue;this.numberFormatter&&(l=this.numberFormatter.format(this.currentValue));var c=l;t.html(c);var d=Math.min(this.scaleFactorW,this.scaleFactorH);d>1&&(d=1);var h=this.applyDefaultProperties(this.currentResult.itemProperties.indicator),f=Math.floor(h.fontSize*d);if(f<9&&(f=9),s.css("font-size",f+"px").css("color",h.fontColor),h.htmlPre?(s.css("white-space","pre"),s.css("font-family","monospace")):s.css("white-space",""),t.css("font-weight",h.fontBold?"bold":"normal").css("font-style",h.fontItalic?"italic":"normal").css("text-decoration",h.fontUnderline?"underline":"none"),o.css("font-size",f+"px"),this.currentValue&&"string"==typeof this.currentValue)if(!/<[a-z][\s\S]*>/i.test(this.currentValue))(t=r(this.tagId).find(".item-area .indicator span.value")).addClass("indicator-dashboard-value-text");if(""!=h.styleLibrary){var p=this.model.getStyleLibrary(h.styleLibrary);if(p&&p.length>0){var m;m=r.isNumeric(this.currentValue)?function(t,e){return e>=parseFloat(t.from)&&e<parseFloat(t.to)}:function(t,e){return t.from.toLowerCase()==e.toLowerCase||t.to.toLowerCase()==e.toLowerCase};for(var y=0;y<p.length;y++)if(this.currentValue&&m(p[y],this.currentValue)){var v=p[y];o.attr("class",v.shape),""==v.shape?s.css("color",v.color):o.css("color",v.color);break}}}this.updateClassAutosize()}}},applyNumberFormat:function(){this.applyStyles()},sumarizeValue:function(t){var e=0;"string"==typeof t.series[0].data[0]&&(e="");for(var i=0;i<t.series.length;i++)for(var r=t.series[i],n=0;n<r.data.length;n++)r.data[n]&&(e+=r.data[n]);return e}})}.apply(e,a))||(t.exports=s)}).call(this,i(1),i(1144))}}]);