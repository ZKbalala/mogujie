/*
* @Author: Administrator
* @Date:   2018-10-13 10:26:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-13 20:10:41
*/
$(function(){
	$('header ul>li').hover(function() {
		$(this).children('ol').show()
	}, function() {
		$(this).children('ol').hide()
	});
	/*个人账号下边的点击事件*/
	$('aside.left_wrap ul>li').click(function(event) {
		$(this).children('ol').slideToggle(300);
		$(this).children('span.san').toggleClass('fir');
	});
	/*右边的点击事件*/
	$('div.card p.head span').click(function(event) {
		$('div.card aside.time>p').children().eq(0).addClass('pink').siblings('span').removeClass('pink');
		$(this).addClass('white').siblings('span').removeClass('white');
	});
	$('div.card aside.time>p span').click(function(event) {
		$(this).addClass('pink').siblings('span').removeClass('pink');
	});


	/*测导航伸缩事件*/
	function naeve(){
		$('aside.nav').stop();
		$('aside.nav div.troley').stop();
		if($('body').width()<=1260){
			$('aside.nav').animate({'right':'-30px'});
			$('aside.nav div.troley').css({
				'position': 'relative',
				'background': 'rgba(0, 0, 0, 0.8)'
			});
			$('aside.nav div.troley').animate({'left':'-30px'})
			$('aside.nav div.troley').mouseenter(function(event) {
				$(this).css('background', 'red');
			});
			$('aside.nav div.troley').mouseleave(function(event) {
				$(this).css('background', 'rgba(0, 0, 0, 0.8)');
			});
		}
		else{
			$('aside.nav').animate({'right':'0px'});
			$('aside.nav div.troley').css({
				'position': 'relative',
				'background': 'none'
			});;
			$('aside.nav div.troley').animate({'left':'0px'})
			$('aside.nav div.troley').mouseenter(function(event) {
				$(this).css('background', 'red');
			});
			$('aside.nav div.troley').mouseleave(function(event) {
				$(this).css('background', 'none');
			});
		}
	}
	naeve();
	$(window).resize(function(event) {
		naeve();
	});


		/*窗口滚动事件*/
	$(window).scroll(function(event) {
		if($(this).scrollTop()>0){
			$('aside.nav div.top').css('display', 'inline-block');
		}
		else{
			$('aside.nav div.top').css('display', 'none');
		}
	});

})






