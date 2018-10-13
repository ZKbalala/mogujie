/*
* @Author: Administrator
* @Date:   2018-10-12 19:12:18
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-12 20:23:23
*/
$(function(){
	$('.content div.pic span').click(function(event) {
		$(this).css('display', 'none').siblings('span').css('display', 'inline-block');;
		if($(this).hasClass('img-two')){
			$('.content div.sec').css('display', 'none').siblings('div.fir').css('display', 'block');;
		}
		else{
			$('.content div.fir').css('display', 'none').siblings('div.sec').css('display', 'block');;
		}
	});

	$('.content div.head span').click(function(event) {
		$('div.fir span.warn').css('display', 'none');
		$(this).css('color', '#fe617a').siblings('span').css('color', '#333');;
		$(this).css('border-color', '#ff4066').siblings('span').css('border-color', 'transparent');;
		if($(this).hasClass('one')){
			$('div.fir .nomal').css('display', 'inline-block');
			$('div.fir .mobile').css('display', 'none');
		}
		else{
			$('div.fir .mobile').css('display', 'inline-block');
			$('div.fir .nomal').css('display', 'none');
		}
	});

	/*表单里的input事件*/
	$('div.fir form input').focus(function(event) {
		$('div.fir span.warn').css('display', 'none');
	});
	$('div.fir form input').blur(function(event) {
		var warnsp=$('<span class="warn"></span>');
		warnsp.html($(this).attr('placeholder'));
		$(this).parent().prepend(warnsp);
		warnsp.css('display', 'inline-block');
	});

})












