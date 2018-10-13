
$(function () {
    // 头部
    $("#header>.wrap>.header-top>.server>a").mouseenter(function () {
        $(this).next().show();
    });
    $("#header>.wrap>.header-top>.server>a").mouseleave(function () {
        $(this).next().hide();
    });
    $("#header>.wrap>.header-top>.store>a").mouseenter(function () {
        $(this).next().show();
    });
    $("#header>.wrap>.header-top>.store>a").mouseleave(function () {
        $(this).next().hide();
    });
    
    $("#nav_search_form>.search_inner_box>.selectbox>.selected").mouseenter(function () {
        $(this).next().show();
    });
    $("#nav_search_form>.search_inner_box>.selectbox>.selected").mouseleave(function () {
        $(this).next().hide();
    });

    $("#top_nav_form>.ts_txt").focus(function () {
        $(this).val("");
    });
    $("#top_nav_form>.ts_txt").blur(function () {
        $(this).val("毛衣");
    });

    //右侧栏
    $(".mgj_rightbar>.img>a>.scan").mouseenter(function () {
        $(this).next().show();
    });
    $(".mgj_rightbar>.img>a>.scan").mouseleave(function () {
        $(this).next().hide();
    });

    //内容
    $(".menu_body>.menu>a").mouseenter(function () {
        $(".menu_body > .menu > .item0").css("background-color", "rgb(255, 255, 255)");
        $(this).css("background-color", "rgb(255, 87, 119)");
    });
    $(".menu_body>.menu>a").mouseleave(function () {
        $(this).css("background-color", "rgb(255, 255, 255)");
        $(".menu_body > .menu > .item0").css("background-color", "rgb(255, 87, 119)");
    });

    // 尾部
    $(".footer>.help>.mod>.mod_container>ul>.item_last>div").mouseenter(function () {
        $(this).next().show();
    });
    $(".footer>.help>.mod>.mod_container>ul>.item_last>div").mouseleave(function () {
        $(this).next().hide();
    });

    //滚动屏幕
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#J_sticky_container").show();
        }
        else{
            $("#J_sticky_container").hide();
        }
        if ($(this).scrollTop() > 0) {
            $(".mgj-my-top").show();
        }
        else{
            $(".mgj-my-top").hide();
        }
    });

    //客户服务切换
    $(".hotQuestion>.tabMenu>a").mouseenter(function () {
        var s = $(this).index();
        $(".hotQuestion>.tabPanel>.tabContent").eq(s).show();
        $(".hotQuestion>.tabPanel>.tabContent").eq(s).siblings().hide();
    });

    //商品详情
    $(".goods-main>.slide-up").mouseenter(function () {
        $(this).css("overflow", "visible");
        $(this).css("background-color","#fff");
        
    });
    $(".goods-main>.slide-up").mouseleave(function () {
        $(this).css("overflow", "hidden");
        $(this).css("background-color", "#f6f6f6");
    });

    //分享
    $(".info-box>.goods-social>.share").mouseenter(function () {
        $(this).children().eq(1).show();
    });
    $(".info-box>.goods-social>.share").mouseleave(function () {
        $(this).children().eq(1).hide();
    });
    
});
