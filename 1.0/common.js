/**
 * @fileoverview alert,confirm,prompt通用的模块
 * @author bofang.zxj<bofang.zxj@taobao.com>
 * @module easydialog
 **/
KISSY.add(function(S,Node,Overlay,DD){
	var re = {};
	var $ = Node.all;
	var DOMAIN = document.domain;
	/**
	 * Dialog 默认参数配置
	 * @type {Object}
	 */
	var oDefaultConfig = {
		title:DOMAIN+' 网页提示',
		isNeedDrag:true,
		theme:'gallery/easydialog/1.0/theme/theme-tb.css',
		width:350,
		height:110,
		zIndex:9999,
		closable:true,
		mask:true,
		effect: {
			// effect:"fade",
			// duration:0.2
		},
		align:{
			points: ['cc','cc']
		}
	};
	
	S.mix(re,{
		/**
		 * 处理传入的参数
		 * @param  {Object}   config   配置参数
		 * @param  {Function} callback 函数名
		 * @return {Obejct}            {config:Object,callback:Function}
		 */
		parseData:function(config,callback){
			var reConfig;
			var reCallback;
			if(S.isPlainObject(config)){
				reConfig = S.mix(oDefaultConfig,config);
			}else if(S.isFunction(config)){
				reConfig = oDefaultConfig;
				callback = config;
			}else{
				// S.log('easydialog params are error !');
				reCallback = callback;
				reConfig = oDefaultConfig;
			}
			if(S.isFunction(callback)){
				reCallback = callback;
			}
			// 加载css
			this.loadCss(reConfig.theme);
			return {
				config:reConfig,
				callback:reCallback
			}
		},
		/**
		 * 获取Dialog
		 * @param  {Object} config 配置信息
		 * @return {Object}        Overlay
		 */
		getDialog:function(config){
			return new Overlay.Dialog(config);
		},
		/**
		 * 设置dialog可以拖动
		 * @param {Object} oDialog dialog对象
		 * @return {Object}
		 */
		setDragAble:function(oDialog){
			var elContent = $(oDialog.get('el'));
			var elTxt = elContent.one('.J_KsEasyDialogPromptTxt');
			var self = this;
			var oDD;
			oDD = self._initDD(elContent);
			//输入框focus的时候不需要拖动
			if(elTxt){
				elContent.on('mousedown',function(){
					if(!oDD){
						oDD = self._initDD(elContent);	
					}
					// !oDD && 					
				});
				elTxt.on('mousedown',function(e){
					oDD && oDD.destroy();
					oDD = null;
				});
			}
		},
		_initDD:function(el){
			return new DD.Draggable({
				node: el,
				cursor: 'move',
				move: true
			});
		},
		/**
		 * 加载css
		 * @param  {String} cssUrl css路劲
		 * @return {Object}        this
		 */
		loadCss:function(cssUrl){
			if(cssUrl && S.isString(cssUrl)){
				S.use(cssUrl);
			}
			return this;
		},
		/**
		 * 设置dialog内容
		 * @param {Object} oDialog dialog对象
		 * @param {String} body 的html内容
		 * @param {Object} oContent 内容对象
		 *  @param {String} head dialog的title
		 *  @param {String} body dialog的body内容
		 * @return {Object} this
		 */
		setContent:function(oDialog,strHtml,oContent){	
			// alert(strHtml)	
			oDialog.set('bodyContent',
				S.substitute(strHtml,oContent)
			);
			return this;
		}
	});
	return re;
},{
	requires:['node','overlay','dd']
});
	