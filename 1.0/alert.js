/**
 * @fileoverview 基于Overlay.Dialog dd封装了alert
 * @author bofang.zxj<bofang.zxj@taobao.com>
 * @module easydialog
 **/
KISSY.add(function(S,Base,Node,Common){
	var $ = Node.all;

	var TPL_BODY = '<div class="ks-easy-dialog ks-easy-dialog-ok">'+
		'<div class="ks-easy-dialog-head">{title}</div>'+
		'<div class="ks-easy-dialog-body">'+
			'<div class="ks-easy-dialog-title">{content}</div>'+
			'<p class="ks-easy-dialog-btn-content">'+
				'<button class="ks-easy-dialog-yes J_KsDialogOkBtn J_KsEasyDialogBtn">确定</button></p>'+
		'</div>'+
	'</div>';

	
	
	function Alert(){
		Alert.superclass.constructor.call(this);
	};
	
	/**
	 * 绑定事件
	 * @param  {Object}   oDialog  dialog名
	 * @param  {Function} callback callback 函数
	 */
	function bindEvent(oDialog,callback){
		oDialog.on('afterRenderUI',function(){
			var elContent = $(oDialog.get('el'));
			var elBtn = elContent.all('.J_KsEasyDialogBtn');
			elBtn.on('click',function(e){
				oDialog.destroy();
				callback && callback({
					result:true
				});
			});
		});
	}
	
	S.extend(Alert, Base, {
		/**
		 * 模拟window.prompt
		 * @param  {String}   message  提示的信息
		 * @param  {Object}   config   配置信息
		 * @param  {Function} callback 回调函数
		 * @return {Obejct}            dialog
		 */
		alert:function(message,config,callback){
			var oParseData = Common.parseData(config,callback);
			var oConfig = oParseData.config;
			var oEasyDialog = Common.getDialog(oConfig);
			var funcCallback = oParseData.callback;
			// 设置内容
			Common.setContent(oEasyDialog, TPL_BODY,{
				title:oConfig.title,
				content:message
			});
			// 事件绑定
			bindEvent(oEasyDialog,funcCallback);
			oEasyDialog.show();
			// 拖动配置
			oConfig.isNeedDrag && Common.setDragAble(oEasyDialog);
			return oEasyDialog;					
		}
	});
	return new Alert().alert;
},{
	requires:['base','node','./common']
});