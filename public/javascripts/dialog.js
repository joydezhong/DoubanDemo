$(function(){
    //登录注册操作
    $(".mc-register-trigger").on("click", function(){
        var login = new mdui.Dialog("#login-modal", {modal: true, destroyOnClosed: true});
        login.close();
    });
    $(".mc-login-trigger").on("click", function(){
        var register = new mdui.Dialog("#register-modal", {modal: true, destroyOnClosed: true});
        register.close();
    });
})