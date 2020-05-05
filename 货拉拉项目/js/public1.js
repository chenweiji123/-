window.onload = function() {
//	var winheight = $('.bommt').offset().top-150*6;
	//	winheight = winheight +94*2 ;
	var li = document.querySelector('.li-style');
	var divs = document.querySelector('.div_none')
	li.addEventListener('mouseover', function() {
		divs.style.transition = 'all .7s'
		divs.style.opacity = 1;
	})
	li.addEventListener('mouseout', function() {
		divs.style.opacity = 0;
		divs.style.transition = 'all 1s .5s';
	});
//	$('.bommt').addClass('bommt-wrap');
	//顶部
	$(document).scroll(function() {
	
		if($(document).scrollTop() > 0) {
			$('#warp-top').addClass('warp-top-A');
		} else if($(document).scrollTop() == 0) {
			$('#warp-top').removeClass('warp-top-A');
		}
	});
}