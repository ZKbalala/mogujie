
$(function () {
    // 头部
    $("#header>.wrap>.header-top>.server").mouseenter(function () {
        $(this).children().eq(1).show();
    });
    $("#header>.wrap>.header-top>.server").mouseleave(function () {
        $(this).children().eq(1).hide();
    });
    $("#header>.wrap>.header-top>.store").mouseenter(function () {
        $(this).children().eq(1).show();
    });
    $("#header>.wrap>.header-top>.store").mouseleave(function () {
        $(this).children().eq(1).hide();
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

    //图片展示
    $('.goods-topimg>.small-img>.box>.list>ul>li').mouseenter(function() {
        $(this).addClass('c');

        if($(this).index() == 0){
            $('.goods-topimg>.big-img>img').attr('src','../images/180813_8e957a5c7eckk067980h160h69079_640x960.jpg_468x468.jpg');
        }else if($(this).index() == 1){
            $('.goods-topimg>.big-img>img').attr('src','../images/180813_15l31aa84393256i109gkl271e03b_640x960.jpg_468x468.jpg');
        }else if($(this).index() == 2){
            $('.goods-topimg>.big-img>img').attr('src','../images/180813_82dj2076e66e8h069e8d6f5kag66h_640x960.jpg_468x468.jpg');
        }else{
            $('.goods-topimg>.big-img>img').attr('src','../images/180813_2gga8gfdkfae3h9if49ilecl24j06_640x960.jpg_468x468.jpg');
        }
    });
    $('.goods-topimg>.small-img>.box>.list>ul>li').mouseleave(function() {
        $(this).removeClass('c');
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
    
    //扩展栏
    $(".detail-content>.col-extra>.qrcode").mouseenter(function () {
        $(this).children().eq(3).addClass('n');
    });
    $(".detail-content>.col-extra>.qrcode").mouseleave(function () {
        $(this).children().eq(3).removeClass('n');
    });

    $(".detail-content>.col-extra>.qrcode").mouseenter(function () {
        $(this).children().eq(1).show();
    });
    $(".detail-content>.col-extra>.qrcode").mouseleave(function () {
        $(this).children().eq(1).hide();
    });

    $(".detail-content>.col-extra>.extranav-bd>ul>li").click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    $(window).scroll(function (event) {
        if($(window).scrollTop() !=0) {
            console.log($(window).scrollTop());
        }
    });

    //本店同类商品
    $('.tabbar-box>ul>li:nth-of-type(3)').click(function(event) {
        
        // $('body').animate({
        //     scrollTop: $('.recommendlist>.panel-title>h1').offset().top
        // }, 1000)
        $(window).scrollTop($('.recommendlist>.panel-title>h1').offset().top);
    });
});
