$(function() {
	var winheight = $(window).height();
	var bool = false;
	winheight = winheight - 92 * 2;
	//鼠标滚动设置立即下单盒子的位置
	$(document).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('.menu-li').css('opacity', '1');
		} else if($(this).scrollTop() === 0) {
			$('.menu-li').css('opacity', '0');
		}
		if($(document).scrollTop() > winheight) {
			$('.bottom-action').removeClass('bottom-warp');
		} else if($(document).scrollTop() < winheight) {
			$('.bottom-action').addClass('bottom-warp');
		}
	});
	//回到顶部
	$('.menu-li').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
	});
	//发货地址
	warp('.i-1', '.xlk-1');
	//点击其他部分下拉框关闭
	$(window).click(function(e) {
			var a = ['.xlk-1', '.xlk-2', '.xlk-3', '.xlk-4', '.xlk-5', '.xlk-6', '.xlk-7'];
			var b = ['.i-1', '.i-2', '.i-3', '.i-4', '.i-5', '.i-6', '.i-7'];
			for(var i in a) {
				$(a[i]).slideUp('fast');

			}
			for(var j in b) {
				$(b[j]).removeClass('is-reverse')
			}
		})
		//发货地址选项点击事件
	$('.gds').click(function() {
			$('.text1').val($(this).html());
			$('.text2').val('北大青鸟');
			//判断文本框是否有值
			if($('.text1').val() != '') {
				$('.address-mask').removeClass('address-mask');
			}
			$('.xlk-1').slideUp('slow');
		})
		//货物类型点击事件
	warp('.i-2', '.xlk-3');
	//收获地址列表选项
	$('.region-list span').on('click', function() {
		var $text = $(this).html();
		$('.neirong').val($text);
		$('.text5').val('北大青鸟');
		$('.xlk-2').slideUp('slow');

	})

	//选择货物列表事件
	$('.cus-btn').click(function() {

		$('.placeholder').html($(this).html());
		$('.xlk-3').slideUp('slow');
	})

	text('.text-a', '.val-a', '.i-4', '.xlk-4');
	text('.text-b', '.val-b', '.i-5', '.xlk-5');
	text('.text-c', '.val-c', '.i-6', '.xlk-6');
	text('.text-d', '.val-d', '.i-7', '.xlk-7');
	//收货地址
	warp('.i-3', '.xlk-2');
	//送货上门
	warp('.i-4', '.xlk-4');
	//付款方式
	warp('.i-5', '.xlk-5');
	//包装木架
	warp('.i-6', '.xlk-6');
	//签收单
	warp('.i-7', '.xlk-7');
	//右侧固定栏事件
	$('.qrcode-icon').hover(function() {
		$('.s-img1').show();
	}, function() {
		$('.s-img1').hide();
	})
	$('.tel-icon').hover(function() {
			$('.s-img2').show();
		}, function() {
			$('.s-img2').hide();
		})
		//点击电话簿
	function phone(obj) {
		$(obj.id1).click(function() {
			$(obj.id2).show();
		})
	}
	//点击取消
	function close(obj) {
		$(obj.id1).click(function() {
			$(obj.id2).hide();
		})
	}
	phone({
		id1: '.dj-a',
		id2: '.xs-e'
	})
	phone({
		id1: '.dj-b',
		id2: '.xs-e'
	})
	close({
			id1: '.close-a',
			id2: '.xs-e'
		})
		//隐藏和显示下拉框
	function warp(class1, class2) {
		$(class1).on('click', function(e) {
			if($(class2).css('display') == 'none') {
				$(class1).addClass('is-reverse');
				$(class2).slideDown('fast');

			} else {
				$(class1).removeClass('is-reverse');
				$(class2).slideUp('fast');

			}
			//		组织'.i-1'事件冒泡
			e.stopPropagation()
				//		组织'.xlk-1'事件冒泡
			$(class2).click(function(e) {
				e.stopPropagation()
			})
		})
	}

	//选择下拉框值
	function text(a, b, c, d) {
		$(a).click(function() {
			$(b).val($(this).children().html());
			$(c).removeClass('is-reverse')
			$(d).slideUp('fast');
		})
	}

	//点击我同意
	$('.icon-circle-c').click(function() {
			$(this).toggleClass('icon-circle-active');
			$('.cur-price').html('￥1000.00');
			$('.xd').toggleClass('disabled');
			if($('.xd').attr('class') == 'confirm-btn xd') {
				$('.xd').click(function() {
					if($('.userInfo-btn').html() != '登录') {
						$('.cur-price').html('￥--');
						alert('下单成功！');
						$(this).unbind('click');
					} else {
						$('.login-1').show();
					}
				})
			}
		})
		//示例显示
	$('.form-tip').click(function() {
			$('.xs-d').show()
		})
		//关闭
	$('.el-dialog__close').click(function() {
			$('.xs-d').hide()
		})
		//鼠标移入显示货物保价
	$('.xs').hover(function() {
		$('.xs-a').show()
	})
	$('.xs-a').mouseleave(function() {
		$(this).hide('fast')
	})

	$('.xs-c').hover(function() {
		$('.xs-b').show()

	}, function() {

		$('.xs-b').hide()

	})
	$('.xs-b').mouseenter(function() {
		$(this).show()
	})
	$('.xs-b').mouseleave(function() {
		$(this).hide('fast')
	})

	$(".icon-circle-a").click(function() {
		$(this).toggleClass('icon-circle-active')
	})

	$(".icon-circle-b").click(function() {
		$(this).toggleClass('icon-circle-active')
	})
	$('.address-mask').click(function() {
		$('.common-toast').show()
		setTimeout(function() {
			$('.common-toast').fadeOut()
		}, 2000)
	})
})