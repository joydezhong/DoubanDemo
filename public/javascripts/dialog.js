$(function(){

    //登录注册切换操作
    $(".mc-register-trigger").on("click", function(){
        var login = new mdui.Dialog("#login-modal", {modal: true, destroyOnClosed: true});
        login.close();
    });
    $(".mc-login-trigger").on("click", function(){
        var register = new mdui.Dialog("#register-modal", {modal: true, destroyOnClosed: true});
        register.close();
    });

    //登录注册执行
    $(".btn-register").on('click',function(){
        var username = $("#reg-user").val();
        var password = $("#reg-pwd").val();
        var register = new mdui.Dialog("#register-modal", {modal: true, destroyOnClosed: true});
        register.close();
        if(username && password){
            $(this).attr('disabled',true);
            $(this).text("注册中...");
            $.post('/api/register', {username: username, password: password}, function(json){
                if(json.code == 1){
                    // console.log(json.message);
                    mdui.alert(json.message, '提示', function(){
                        $(".top-login").click();
                    });
                }else{
                    mdui.alert(json.message, '提示');
                }
                $('.btn-register').removeAttr('disabled').text("注册");
            });
        }else{
            mdui.alert('MMP，正确填写哈！', '提示');
        }
    });

    $(".btn-login").click(function(){
        var username = $(".log-user").val();
        var password = $(".log-pwd").val();
        var login = new mdui.Dialog("#login-modal", {modal: true, destroyOnClosed: true});
        login.close();
        if(username && password){
            $(this).attr('disabled', true);
            $(this).text("登录中...");
            $.post('/api/login', {username: username, password: password}, function(json){
                if(json.code == 1){
                    mdui.alert(json.message, '提示');
                    $('.top-login').hide();
                    $('.top-exit').show().attr('mdui-tooltip', "{content: '退出，" + username + "'}");
                }else{
                    mdui.alert(json.message, '提示');
                }
                $('.btn-login').removeAttr('disabled').text("登录");
            });
        }else{
            mdui.alert('MMP，正确填写哈！', '提示');
        }
    });
})
