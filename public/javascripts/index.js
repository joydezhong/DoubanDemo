$(function(){
    //菜单配置
    $(".nav-header .mdui-collapse-item .mdui-collapse-item-body .mdui-list-item").on("click",function(){
        $(this).addClass("mdui-list-item-active").siblings().removeClass("mdui-list-item-active");
        $(this).parent().parent().siblings().find(".mdui-collapse-item-body .mdui-list-item").removeClass("mdui-list-item-active");
        sessionStorage.setItem("nav", $(this).attr('href'));
    })
    var nav = sessionStorage.getItem('nav').replace(/^#\//,'');
    $('.'+nav).parent().parent().addClass('mdui-collapse-item-open').siblings().removeClass('mdui-collapse-item-open');
    $('.'+nav).addClass("mdui-list-item-active").siblings().removeClass("mdui-list-item-active");
    $('.'+nav).parent().parent().siblings().find(".mdui-collapse-item-body .mdui-list-item").removeClass("mdui-list-item-active");
})