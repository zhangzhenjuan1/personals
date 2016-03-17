$(function(){

    $(".dingbu").click(function(){

        var curr=$(window).scrollTop();
        clearInterval(t1);
        var t1=setInterval(function(){
            if(curr>0){
                curr-=50;
                //console.log(curr);
                $(window).scrollTop(curr);
            }else{
                $(window).scrollTop(0);
                clearInterval(t1);
            }
            //$(window).scrollTop(0);
        },10);

        //alert(0);
    });

    //$(".dingbu").animate(function(){

    //})
    //$(".work-z").hover(function(){
    //    $(this).find($(".hid")).css({
    //        height:"100%",
    //        webkitTransition:"all 1s ease"
    //    })
    //},function(){
    //    $(this).find($(".hid")).css({
    //        height:0,
    //        webkitTransition:"all 1s ease"
    //
    //});
    //});
    $(window).resize(function(){
        if($(window).width()<730){
            $(".header2").css({display:"block"});
            $(".header1").css({display:"none"});

        }else{
            $(".header1").css({display:"block"});
            $(".header2").css({display:"none"});
        }
    });
  $(window).resize();
    $(".daohang").click(function(){
        $(".ss").finish();
        $(".ss").slideToggle(200);
    });
    $(".work-z").hover(function(){
        $(this).find("p").css({display:"block"});
        $(this).find($(".hid")).css({
            height:"100%",
            webkitTransition: "height  0.5s linear "

        });
        $(this).find($(".wcon")).css({"display":"block" ,
            webkitTransition: "display 0.5s linear "
        })
    },function(){
        $(this).find("p").css({display:"none"});

        $(this).find($(".hid")).css({
            height:0,
            webkitTransition: "height 0.5s linear "
        });
        $(this).find($(".wcon")).css({"display":"none",
            webkitTransition: "display 0.5s linear "
        })
    })
    $(".weixin").hover(function(){
        $(this).find(".weixintu").fadeIn();
    },function(){
        $(this).find(".weixintu").fadeOut();

    })
});