 $(function(){
     console.log(456);
    $(".img-box").each(function (i,v) {
        console.log(123);
        var src = $(v).attr('data-img');
        $('.img-box').html("<iframe id='frameImg"+i+"'><img src='"+ src +"' /></iframe>");
    });
})