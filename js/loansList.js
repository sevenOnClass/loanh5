$(function () {

	$('.tabList').click(function(){
		// siblings 遍历

		$(this).addClass('tabListOn').siblings('.tabList').removeClass('tabListOn');
		$(this).next('.tabMainPop').removeClass('hide');
		$(this).siblings('.tabList').next('.tabMainPop').addClass('hide');
	});
	// 弹框消失
	$('.tabMainPop').click(function (){
		$(this).addClass('hide')
	});
	// on是什么意思
	$('.tabMainPop').on('click','span',function(){
		$(this).addClass('classifyOn').siblings('span').removeClass('classifyOn');
	})
})