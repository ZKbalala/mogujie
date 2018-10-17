/*
* @Author: admin
* @Date:   2018-09-04 13:57:00
* @Last Modified by:   admin
* @Last Modified time: 2018-10-12 09:51:28
*/
$(function(){
	var banli=0;
	var jishi=1;
	var ji;
	var timer0;
	var timer1;
	var timer2;
	/*轮播图*/
	function sl(){
		$('.banner ol li').eq(banli).children().css('display', 'block');
		$('.banner ol li').eq(banli).siblings('li').children().css('display', 'none');
		$('.banner ol li').eq(banli).addClass('banplay').siblings('li').removeClass('banplay');
		$('.banner .pic li').eq(banli).fadeIn(1000).siblings('li').hide();
		banli++;
		if(banli>=2){
			banli=0;
		}
		setInterval(function(){
			jishi++;
			if(jishi==4){jishi=1;}
		},1000)
	}
	function st1(){
		clearTimeout(timer0);
		timer0=setTimeout(function(){
			sl();
		},100)
	}
	function st2(){
		clearInterval(timer1);
		timer1=setInterval(function(){
				sl();
		},3100)		
	}
	st1();
	st2();
	/*鼠标移入轮播图停止*/
	$('.banner .pic').mouseenter(function(event) {
		clearInterval(timer1);
	});

	/*鼠标移入转动图标时*/
	$('.banner ol li').mouseenter(function(event) {
		banli=$(this).index();
		st1();
	});
	function mout(){
		clearInterval(timer1);
		clearTimeout(timer0);
		ji=jishi;
		if(ji==1){
			st1();
			st2();
		}
		else if(ji==2){
			setTimeout(function(){
				st1();
				st2();
			},2000)
		}
		else if(ji==3){
			setTimeout(function(){
				st1();
				st2();
			},1000)
		}
	}
	$('.banner-div .right').mouseenter(function(event) {
		 mout()
	});
	$('.banner').mouseleave(function(event) {
		 mout()
	});
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

	/*搜索框获得焦点时*/
	$('div.no form input').focus(function(event) {
		console.log(1)
		$(this).val(' ');
		$(this).css('color', '#333');
	});
	$('div.no form input').blur(function(event) {
		if($(this).val()==' '){
			$(this).val('毛衣');
			$(this).css('color', '#999');
		}
		else{
			$(this).css('color', '#333');
		}
	});
	/*让隐藏的div显现*/
	$('.theme-bottom li').hover(function() {
		$(this).children('.hid-div').css('display', 'inline-block');
		$(this).siblings('li').children('.hid-div').css('display', 'none');
	}, function() {
		$(this).children('.hid-div').css('display', 'none');
	});

	/*content区*/
	var timone;
	var num=0;
	function onediv(){
		clearInterval(timone);
		timone=setInterval(function(){
		num++;
		if(num==8){
			$('.content .one .right div').css('margin-left', '0px');
			num=1;
		}
		$('.content .one .right div').animate({'margin-left': -num*917+'px'},400)
	},1900)
	}
	onediv()

	/*鼠标移入停止轮播*/
	$('.one aside.right').mouseover(function(event) {
		clearInterval(timone);
	});
	$('.one aside.right').mouseleave(function(event) {
		onediv()
	});

	$('.one .right .right').click(function(event) {
		num++;
		if(num==8){
			$('.content .one .right div').css('margin-left', '0px');
			num=1;
		}
		$('.content .one .right div').animate({'margin-left': -num*917+'px'},400)
	});
	$('.one .right .left').click(function(event) {
		num--;
		if(num<0){
			$('.content .one .right div').css('margin-left', '-4419px');
			num=4;
		}
		$('.content .one .right div').animate({'margin-left': -num*917+'px'},400)
	});


	/*第二个div里的动画*/
	var num2=0;
	var num2next;
	var timtwo;
	function secdiv(){
		clearInterval(timtwo);
		timtwo=setInterval(function(){
			num2next=num2+1;
			if(num2next>4){
				num2next=0;
			}
			$('.two .top ul').eq(num2next).css('display', 'none');
			$('.two .top ul').eq(num2next).css('left', '960px');
			$('.two .top ul').eq(num2next).css('display', 'inline-block');
			$('.two .top ul').eq(num2).animate({'left': '-960px'}, 400);
			$('.two .top ul').eq(num2next).animate({'left': '0px'}, 400);
			num2++;
			if(num2>4){
				num2=0;
			}
		},2000)
	}
	 secdiv();
	$('.two .top').hover(function() {
		clearInterval(timtwo);
	}, function() {
		 secdiv();
	});
	$('.two .top>span').click(function(event) {
		if($(this).index()==2){
			num2next=num2+1;
			if(num2next>4){
				num2next=0;
			}
			$('.two .top ul').eq(num2next).css('display', 'none');
			$('.two .top ul').eq(num2next).css('left', '960px');
			$('.two .top ul').eq(num2next).css('display', 'inline-block');
			$('.two .top ul').eq(num2).animate({'left': '-960px'}, 400);
			$('.two .top ul').eq(num2next).animate({'left': '0px'}, 400);
			num2++;
			if(num2>4){
				num2=0;
			}
		}
		else{
			num2next=num2-1;
			if(num2next<0){
				num2next=4;
			}
			$('.two .top ul').eq(num2next).css('display', 'none');
			$('.two .top ul').eq(num2next).css('left', '-960px');
			$('.two .top ul').eq(num2next).css('display', 'inline-block');
			$('.two .top ul').eq(num2).animate({'left': '960px'}, 400);
			$('.two .top ul').eq(num2next).animate({'left': '0px'}, 400);
			num2--;
			if(num2<0){
				num2=4;
			}
		}
	});
	/*第四个div里的动画*/
	var four1='.four .mid ul';
	var fourol1='.four .mid ol li';
	var fourmid1='.four .mid';
	function dithree(four,fourol,fourmid){
		var num3=0;
		var num31=0;
		var num3next;
		var timthree;
		var timthree1;
		function thidiv(num3,num3next,timthree){
			clearInterval(timthree);
			timthree=setInterval(function(){
				num3next=num3+1;
				if(num3next>4){
					num3next=0;
				}
				$(four).eq(num3next).css('display', 'none');
				$(four).eq(num3next).css('left', '630px');
				$(four).eq(num3next).css('display', 'inline-block');
				$(fourol).eq(num3next).addClass('current').siblings('li').removeClass('current');
				$(four).eq(num3).animate({'left': '-630px'}, 1000);
				$(four).eq(num3next).animate({'left': '0px'}, 1000);
				num3++;
				if(num3>4){
					num3=0;
				}
				num31=num3;
			},2000)
			timthree1=timthree;
		}
		 thidiv(num3,num3next,timthree);
		$(fourmid).hover(function() {
			clearInterval(timthree1)
		}, function() {
			num3=num31;
			/*timthree=timthree1;*/
			 thidiv(num3,num3next,timthree);
		});

	}
	dithree(four1,fourol1,fourmid1);
	var i4=1;
	setInterval(function(){
		$('.four .left').children().eq(i4).css('display', 'block').siblings('a').css('display', 'none');;
		if(i4==0){
			i4=1;
		}else{
			i4=0;
		}
		
	},2600)

	/*第三个div里的动画*/
	var i3=1;
	var three1='.three .mid ul';
	var threeol1='.three .mid ol li';
	var threemid1='.three .mid';
	dithree(three1,threeol1,threemid1);
	setInterval(function(){
		$('.three .left').children().eq(i3).css('display', 'block').siblings('a').css('display', 'none');;
		if(i3==0){
			i3=1;
		}else{
			i3=0;
		}
		
	},2600)

	/*第五个div里的动画*/
	
	var five1='.five .mid ul';
	var fiveol1='.five .mid ol li';
	var fivemid1='.five .mid';
	dithree(five1,fiveol1,fivemid1);

	/*第六个div里的动画*/
	var i6=1;
	var six1='.six .mid ul';
	var sixol1='.six .mid ol li';
	var sixmid1='.six .mid';
	dithree(six1,sixol1,sixmid1);
	setInterval(function(){
		$('.six .left').children().eq(i6).css('display', 'block').siblings('a').css('display', 'none');;
		if(i6==0){
			i6=1;
		}else{
			i6=0;
		}
		
	},2600)

	/*第七个div里的动画*/
	var i7=1;
	var seven1='.seven .mid ul';
	var sevenol1='.seven .mid ol li';
	var sevenmid1='.seven .mid';
	dithree(seven1,sevenol1,sevenmid1);
	setInterval(function(){
		$('.seven .left').children().eq(i7).css('display', 'block').siblings('a').css('display', 'none');;
		if(i7==0){
			i7=1;
		}else{
			i7=0;
		}
		
	},2600)

	/*第八个div里的动画*/
	var i8=1;
	var eight1='.eight .mid ul';
	var eightol1='.eight .mid ol li';
	var eightmid1='.eight .mid';
	dithree(eight1,eightol1,eightmid1);
	setInterval(function(){
		$('.eight .left').children().eq(i8).css('display', 'block').siblings('a').css('display', 'none');;
		if(i8==0){
			i8=1;
		}else{
			i8=0;
		}
		
	},2600)

	/*倒计时*/
	/*function timnum(){
		var date;
		var hour;
		var minu;
		var seco;
		var timer;
		timer=setInterval(function(){
			date=new Date();
			hour=date.getHours();
			hour=23-parseInt(hour);
			if(hour<10){
				hour='0'+hour;
			}
			minu=60-parseInt(date.getMinutes())-1;
			if(minu<10){
				minu='0'+minu;
			}
			seco=60-parseInt(date.getSeconds());
			if(seco<10){
				seco='0'+seco;
			}
			$('div.one span.hour').html(hour.toString());
			$('div.one span.minute').html(minu.toString());
			$('div.one span.second').html(seco.toString());

		},1000)
		
	}*/

	/*倒计时*/
	function setimnum(){
		var date;
		var hour;
		var minu;
		var seco;
		var timer;
		clearInterval(timer);
		timer=setInterval(function(){
			date=new Date();
			hour=date.getHours();
			hour=23-parseInt(hour);
			if(hour<10){
				hour='0'+hour;
			}
			minu=60-parseInt(date.getMinutes())-1;
			if(minu<10){
				minu='0'+minu;
			}
			seco=60-parseInt(date.getSeconds());
			if(seco<10){
				seco='0'+seco;
			}
			$('div.one span.hour').html(hour.toString());
			$('div.one span.minute').html(minu.toString());
			$('div.one span.second').html(seco.toString());
			setimnum();
		},1000)

	}
	setimnum();

	/*窗口滚动事件*/
	$(window).scroll(function(event) {
		if($(this).scrollTop()>=800){
			$('div.search').css('display', 'inline-block');
		}
		if($(this).scrollTop()<=400){
			$('div.search').css('display', 'none');
		}
	});

})








