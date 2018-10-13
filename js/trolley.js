/*
* @Author: Administrator
* @Date:   2018-10-05 08:31:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-12 22:14:07
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
	
	/*购物车里的第一个全选*/
	var num=0;
	var sith_prc;
	$('thead input').click(function(event) {
		num=0;
		if($(this).prop('checked')==true){
			$('tbody tr.pro').css('background', '#fff6f6');
			$('tbody input[type="checkbox"]').prop('checked', 'true');
			$('div.pay input[type="checkbox"]').prop('checked', 'true');
			/*锁值*/
			sith_prc=$('tbody tr.pro').children('.sith');
			for(var i=0;i<sith_prc.length;i++){
				(function (lockedInIndex) {
		     		num=num+parseFloat(sith_prc.eq(i).children('span').html());
		   		})(i);
			}
			$('div.pay aside.right b:nth-of-type(2)').html(num.toString())
			$('div.pay i').html($('tbody tr.pro').length);
			$('div.pay aside.right a').css('background', '#f13c37');
		}
		if($(this).prop('checked')==false){
			$('tbody tr.pro').css('background', '#fff');
			$('tbody input[type="checkbox"]').removeAttr('checked');
			$('div.pay input[type="checkbox"]').removeAttr('checked');
			$('div.pay aside.right b:nth-of-type(2)').html('0.00')
			$('div.pay i').html('0');
			$('div.pay aside.right a').css('background', '#d8d8d8');
		}

	});
	/*最后一个全选*/
	$('div.pay input').click(function(event) {
		num=0;
		if($(this).prop('checked')==true){
			$('thead input').prop('checked','true');
			$('tbody tr.pro').css('background', '#fff6f6');
			$('tbody input[type="checkbox"]').prop('checked', 'true');
			$('div.pay input[type="checkbox"]').prop('checked', 'true');
			/*锁值*/
			sith_prc=$('tbody tr.pro').children('.sith');
			for(var i=0;i<sith_prc.length;i++){
				(function (lockedInIndex) {
		     		num=num+parseFloat(sith_prc.eq(i).children('span').html());
		   		})(i);
			}
			$('div.pay aside.right b:nth-of-type(2)').html(num.toString())
			$('div.pay i').html($('tbody tr.pro').length);
			$('div.pay aside.right a').css('background', '#f13c37');
		}
		if($(this).prop('checked')==false){
			$('thead input').removeAttr('checked');
			$('tbody tr.pro').css('background', '#fff');
			$('tbody input[type="checkbox"]').removeAttr('checked');
			$('div.pay input[type="checkbox"]').removeAttr('checked');
			$('div.pay aside.right b:nth-of-type(2)').html('0.00')
			$('div.pay i').html('0');
			$('div.pay aside.right a').css('background', '#d8d8d8');
		}
		
	});

	/*计算价格*/
	function pricenum(){
		var price=0.00;
		var pay_i=0;
		for(var i=0;i<$('tbody tr.pro').length;i++){
			(function (lockedInIndex) {
	     		if($('tbody tr.pro').eq(i).children().children('input').prop('checked')==true){
	     			pay_i++;

	     			$('div.pay i').html(pay_i.toString());
	     			price=price+parseFloat($('tbody tr.pro').eq(i).children('.sith').children('span').html());
	     			$('div.pay aside.right b:nth-of-type(2)').html(price.toString());
	     			$('div.pay aside.right a').css('background', '#f13c37');
	     		}
	     	
	   		})(i);
		}
		if(pay_i==0){
			$('div.pay i').html(pay_i.toString());
			$('div.pay aside.right b:nth-of-type(2)').html('0.00');
			$('div.pay aside.right a').css('background', '#d8d8d8');
		}
		
	}
	/*检查是否全选*/
	function all_pro(){
		var len=0;
		for(var i=0;i<$('tbody tr.shop').length;i++){
			(function (lockedInIndex) {
				if($('tbody tr.shop').eq(i).children().children('input').prop('checked')==false){
					$('thead input').removeAttr('checked');
					$('div.pay input').removeAttr('checked');
				}
				else{
					len++;
				}
	   		})(i);
		}
		if(len==$('tbody tr.shop').length){
			$('thead input').prop('checked','true');
			$('div.pay input').prop('checked','true');
		}		
	}
	
	/*勾选店铺*/
	var nextno;
	$('tbody tr.shop input').click(function(event) {
		if($(this).prop('checked')==true){
			nextno=$(this).parent().parent('tr').next();
			while(nextno.hasClass('pro')){
				nextno.css('background', '#fff6f6');
				nextno.children('td').children('input').prop('checked', 'true');
				nextno=nextno.next();
			}
			pricenum();
		}
		else{
			nextno=$(this).parent().parent('tr').next();
			while(nextno.hasClass('pro')){
				nextno.css('background', '#fff');
				nextno.children('td').children('input').removeAttr('checked');
				nextno=nextno.next();
			}
			pricenum();
			$('thead input').removeAttr('checked');
			$('div.pay input').removeAttr('checked');
		}
		all_pro();
		
	});

	/*点击每一行里的删除*/
	$('tbody td.sevth span').click(function(event) {
		if($(this).parent().parent().next('tr').hasClass('pro')){
			$(this).parent().parent().remove();
		}
		else{
			$(this).parent().parent().prev('.shop').remove();
			$(this).parent().parent().remove();
		}
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







