/*! easydialog - v1.0 - 2013-09-16 10:44:00 AM
* Copyright (c) 2013 bofang.zxj; Licensed  */
KISSY.add("gallery/easydialog/1.0/common",function(a,b,c,d){var e={},f=b.all,g=document.domain,h={title:g+" \u7f51\u9875\u63d0\u793a",isNeedDrag:!0,theme:"gallery/easydialog/1.0/theme/theme-tb.css",width:350,height:110,zIndex:9999,closable:!0,mask:!0,effect:{},align:{points:["cc","cc"]}};return a.mix(e,{parseData:function(b,c){var d,e;return a.isPlainObject(b)?d=a.mix(h,b):a.isFunction(b)?(d=h,c=b):(e=c,d=h),a.isFunction(c)&&(e=c),this.loadCss(d.theme),{config:d,callback:e}},getDialog:function(a){return new c.Dialog(a)},setDragAble:function(a){var b,c=f(a.get("el")),d=c.one(".J_KsEasyDialogPromptTxt"),e=this;b=e._initDD(c),d&&(c.on("mousedown",function(){b||(b=e._initDD(c))}),d.on("mousedown",function(){b&&b.destroy(),b=null}))},_initDD:function(a){return new d.Draggable({node:a,cursor:"move",move:!0})},loadCss:function(b){return b&&a.isString(b)&&a.use(b),this},setContent:function(b,c,d){return b.set("bodyContent",a.substitute(c,d)),this}}),e},{requires:["node","overlay","dd"]}),KISSY.add("gallery/easydialog/1.0/alert",function(a,b,c,d){function e(){e.superclass.constructor.call(this)}function f(a,b){a.on("afterRenderUI",function(){var c=g(a.get("el")),d=c.all(".J_KsEasyDialogBtn");d.on("click",function(){a.destroy(),b&&b({result:!0})})})}var g=c.all,h='<div class="ks-easy-dialog ks-easy-dialog-ok"><div class="ks-easy-dialog-head">{title}</div><div class="ks-easy-dialog-body"><div class="ks-easy-dialog-title">{content}</div><p class="ks-easy-dialog-btn-content"><button class="ks-easy-dialog-yes J_KsDialogOkBtn J_KsEasyDialogBtn">\u786e\u5b9a</button></p></div></div>';return a.extend(e,b,{alert:function(a,b,c){var e=d.parseData(b,c),g=e.config,i=d.getDialog(g),j=e.callback;return d.setContent(i,h,{title:g.title,content:a}),f(i,j),i.show(),g.isNeedDrag&&d.setDragAble(i),i}}),(new e).alert},{requires:["base","node","./common"]});