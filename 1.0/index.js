/**
 * @fileoverview 基于Overlay.Dialog dd封装了alert,confirm,prompt，使用dialog会很简单
 * @author bofang.zxj<bofang.zxj@taobao.com>
 * @module easydialog
 **/
KISSY.add(function(S,Alert,Confirm,Prompt){
    return {
        alert:Alert,
        confirm:Confirm,
        prompt:Prompt
    }
},{
    requires:['./alert','./confirm','./prompt']
});