## 综述

easydialog是基于Overlay.Dialog dd封装了alert,confirm,prompt，使用dialog会很简单。

* 版本：1.1
* 作者：bofang.zxj
* demo：[http://gallery.kissyui.com/easydialog/1.1/demo/index.html](http://gallery.kissyui.com/easydialog/1.1/demo/index.html)

## 初始化组件
	
    S.use('gallery/easydialog/1.1/index', function (S, Easydialog) {
       	Easydialog.alert();
       	Easydialog.confirm();
       	Easydialog.prompt();
    });

## API说明

### 简单使用

引入模块后直接调用 alert，confirm，prompt方法，然后会执行相应的callback函数

```
Easydialog.alert("Easydialog alert demo",function(e){
	
});
Easydialog.confirm("Easydialog confirm demo",function(e){
	if(e.result){
		// do something ...
	}
});
Easydialog.prompt("Easydialog prompt demo",function(e){
	if(e.result){
		S.log(e.txt)
	}
});

```

### 进阶使用
#### EasyDialog的回调函数callback的参数
#### alert
{result:true}
#### confirm
{result:true || false}
#### prompt
{
	result:true || false,
	txt:string || null
}

#### EasyDialog的配置
方法定义：
EasyDialog.alert(message,config,callback);
可以对第二个参数进行进行相关配置
```
EasyDialog.alert('EasyDialog Demo',{
	width:500,
	height:300,
	mask:false,
},function(e){});
```
其中的config的参数完全和KISSY的overlay相同([Overlay的参数配置](http://docs.kissyui.com/docs/html/api/component/overlay/overlay.html))，其中，对于也会新增几个配置

##### title
dialog的标题，提示的标题
##### idNeedDrag
配置是否需要拖动
##### theme
主题，目前提供的主题有"gallery/easydialog/1.1/theme/theme-tb.css","gallery/easydialog/1.1/theme/theme-tb.css"，分别是淘宝买家中心和tmall的风格，默认为"gallery/easydialog/1.1/theme/theme-tb.css"，也可以自定义主题，当theme赋值为0的时候就不加载主题，大家也可以将自己的主题推送过来供大家使用
##### inputType
inputType 是prompt 专属的方法，用来显示约定输入框，默认为input，当值不为false时，展示为textarea


### 高级使用
Easy的alert,confirm和prompt都提供了单独打包的文件，如果页面上只想单独使用，可以这样
```
KISSY.use('gallery/easydialog/1.1/alert',function(S,Alert){
	Alert(message);
});
KISSY.use('gallery/easydialog/1.1/confirm',function(S,Confirm){
	Confirm(message,config,callback);
});
KISSY.use('gallery/easydialog/1.1/prompt',function(S,Prompt){
	Prompt(message,config,callback);
});
```
### 骨灰级
EasyDialog中的第一个参数message不仅仅可以传递是字符串，html代码也是可以传递的，因此可以通过自定义css和html结构的情况下，做出一个复杂的Dialog,替代KISSY.Overlay.Dialog哦

