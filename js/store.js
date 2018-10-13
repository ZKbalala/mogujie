/*
* @Author: Administrator
* @Date:   2018-09-28 18:47:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-13 11:02:04
*/
$(function(){
	 /*搜索栏里搜商品那一块*/
	$('.no .middle span').mouseover(function(event) {
		$(this).children('ul').css('display', 'inline-block');
	});
	$('.no .middle span').mouseout(function(event) {
		$(this).children('ul').css('display', '');
	});
	/*$('.no .middle span ul')*/

	$('.no .middle span li:nth-of-type(1)').click(function(event) {
		$('.no .middle .text:nth-of-type(2)').css('display', 'none');
		$('.no .middle .text:nth-of-type(1)').css('display', 'inline');
		$('.no .middle span ul').css('display', '');
	});
	$('.no .middle span li:nth-of-type(2)').click(function(event) {
		$('.no .middle .text:nth-of-type(1)').css('display', 'none');
		$('.no .middle .text:nth-of-type(2)').css('display', 'inline');
			$('.no .middle span ul').css('display', '');
	});

	$('header ul>li').hover(function() {
		$(this).children('ol').show()
	}, function() {
		$(this).children('ol').hide()
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
	/*输入那一块*/
	$('form input[type="text"]').focus(function(event) {
		$(this).val(' ');
		$(this).css('color', '#333');
		$('div.special div.record').css('display', 'inline-block');
	});
	$('form input[type="text"]').blur(function(event) {
		if($(this).val()==' '){
			$(this).val('风衣');
			$('div.special div.record').css('display', 'none');
			$(this).css('color', '#999');
		}
		
	});
	$('.content div.right li.enter').mouseenter(function(event) {
		$(this).addClass('cure').siblings('li').removeClass('cure');
		$(this).children('aside').css('display', 'inline-block');
		$(this).children('div.all-div').css('display', 'inline-block');
		$(this).siblings('li').children('aside').css('display', 'none');
		$(this).siblings('li').children('div.all-div').css('display', 'none');
	});

	
})