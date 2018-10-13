/*
* @Author: Administrator
* @Date:   2018-10-05 21:26:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-12 20:30:50
*/
$(function(){
	$('header ul>li').hover(function() {
		$(this).children('ol').show()
	}, function() {
		$(this).children('ol').hide()
	});
	/*购物车里的删除*/
	$('header ol.buy span.delete').click(function(event) {
		$(this).parent().parent('li').remove();
		$('header li b.red').html($('header ol.buy')[0].children.length-1);
	});
	$('form input[type="text"]').blur(function(event) {
		$(this).css('border-color', '#fa817e');
		$(this).next('span').css('display', 'inline');
	});
	$('form textarea').blur(function(event) {
		$(this).css('border-color', '#fa817e');
		$(this).next('span').css('color', '#fa817e');
	});
	$('div.foot aside.right i').html($('table tr.pro').length);
	/*窗口滚动事件*/
	$(window).scroll(function(event) {
		if($(this).scrollTop()>0){
			$('aside.nav div.top').css('display', 'inline-block');
		}
		else{
			$('aside.nav div.top').css('display', 'none');

		}
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



})
