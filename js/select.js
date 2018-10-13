/*
* @Author: admin
* @Date:   2018-09-28 15:55:48
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-12 22:27:24
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

	/*点击更多旁边的三角形按钮*/
	$('.content ul.select b.sj').click(function(event) {
		$(this).parent().siblings('span').children('input').remove();
		$(this).parent().parent().parent().css('line-height', '50px');
		if($(this).parent().parent().parent().height()==50){
			$(this).parent().parent().parent().css('height', '99px');
		}
		else{
			$(this).parent().parent().parent().css('height', '50px');
		}
		$(this).siblings('b').css('display', 'inline');
		
	});
	/*点击多选*/
	$('.content ul.select b.wen').click(function(event) {
		var inp=$('<input type="checkbox">');
		$(this).parent().siblings('span').prepend(inp);
		$(this).parent().siblings('span').children('input').css({
			'vertical-align': 'middle',
			'margin-right': '5px'
		});
		$(this).parent().parent().parent().css({
			'height': '134px',
			'line-height': '30px'
		});
		
		$(this).css('display', 'none');
	});

	/*点击取消*/
	$('.content ul.select form button').click(function(event) {
		$(this).parent('form').siblings('div').children('span').children('input').remove();
		$(this).parent().parent().css('line-height', '50px');
		if($(this).parent().parent().height()==50){
			$(this).parent().parent().css('height', '101px');
		}
		else{
			$(this).parent().parent().css('height', '50px');
		}
		$(this).parent().siblings().children('aside').children('b.wen').css('display', 'inline');
	});


	/*1.选中一项*/
	$('.content div.divch1 span').click(function(event) {
		var span2=$('<span></span>');
		var close_b=$('<b>x</b>');
		span2.html($(this).html());
		span2.children('input').remove();
		span2.addClass('sp2');
		close_b.addClass('close1');
		span2.append(close_b);
		$('div.fen span.clear-all').css('display', 'inline-block');
		$('div.fen span.clear-all').before(span2);
		span2.parind=$(this).parent().parent().parent().parent().index();
		
		$(this).parent().parent().parent().parent().css('display', 'none');
		/*点击清除分类选项*/
		span2.click(function(event) {
			$('.content ul.select>li').eq(span2.parind).css('display', 'block');
			if($(this).siblings('.sp2').length==0){
				$('div.fen span.clear-all').css('display', 'none');;
			}
			span2.remove();
		});
	});

	/*2.选中一项*/
	$('.content div.shai-div li').click(function(event) {
		var span2=$('<span></span>');
		var close_b=$('<b>x</b>');
		span2.html($(this).html());
		span2.children('input').remove();
		span2.addClass('sp2');
		close_b.addClass('close1');
		span2.append(close_b);
		$('div.fen span.clear-all').css('display', 'inline-block');
		$('div.fen span.clear-all').before(span2);
		span2.parind=$(this).parent().parent().index();
		$(this).parent().parent().css('display', 'none');;
		/*绑定事件*/
		span2.click(function(event) {
			$('li.shai div.shai-div span').eq(span2.parind).css('display', 'inline-block');
			if($(this).siblings('.sp2').length==0){
				$('div.fen span.clear-all').css('display', 'none');;
			}
			span2.remove();
		});
	});

	/*点击清除所有*/
	$('div.fen span.clear-all').click(function(event) {
		$(this).siblings('span.sp2').remove();
		$(this).css('display', 'none');;
		$('.content ul.select>li').css('display', 'block');
		$('li.shai div.shai-div span').css('display', 'inline-block');
	});
	
	/*综合那里发生点击*/
	$('div.zong>span').click(function(event) {
		$(this).addClass('cli-red').siblings('span').removeClass('cli-red')
	});
	$('div.zong aside>span').click(function(event) {

		var sphtml=$(this).html();
		sphtml=sphtml.split("-");
		$('div.zong form span.fom-sp').eq(0).children('input').val(sphtml[0]);
		$('div.zong form span.fom-sp').eq(1).children('input').val(sphtml[1]);
	});
	$('div.nine li').hover(function() {
		$(this).css('border-color', '#f46');

		$(this).children().children('aside').children('p').eq(2).css('display', 'inline-block');
	}, function() {
		$(this).css('border-color', '#f2f2f2');
		$(this).children().children('aside').children('p').eq(2).css('display', 'none');
		
	});
	/*窗口滚动事件,出现顶部搜索框以及top*/
	$(window).scroll(function(event) {
		if($(this).scrollTop()>0){
			$('aside.nav div.top').css('display', 'inline-block');
			if($(this).scrollTop()<=50){
				$('div.search').stop().animate({'top':'-50px'}, 500)
			}
			if($(this).scrollTop()>=200){
				$('div.search').stop().animate({'top':'0px'}, 500)
			}
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

	/*让隐藏的div显现*/
	$('.theme-bottom li').hover(function() {
		$(this).children('.hid-div').css('display', 'inline-block');
		$(this).siblings('li').children('.hid-div').css('display', 'none');
	}, function() {
		$(this).children('.hid-div').css('display', 'none');
	});
})
   








