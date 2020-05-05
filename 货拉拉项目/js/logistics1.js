$(function() {

	//登录
	$('.userInfo-btn').click(function() {
		$('.login-1').show();
		$('.login-main').animate({
			top: '50%'
		}, 250)
	})
	$('.close-btn').click(function() {
		$('.login-main').animate({
			top: '49%'
		}, 250)
		setTimeout(function() {
			$('.login-1').hide();
		}, 250)
	})

	//	注册
	$('.logout-btn').click(function() {
		$('.login-2').show();
		$('.login-main').animate({
			top: '50%'
		}, 250)
	})
	$('.close-btn').click(function() {
			$('.login-main').animate({
				top: '49%'
			}, 250)
			setTimeout(function() {
				$('.login-2').hide();
			}, 250)
		})
		//文本框获得焦点事件
	$('.fName').blur(function() {
		if($(this).val() == '') {
			$('.fName-t').fadeIn();
			$(this).addClass('el-input__inner-a')
		} else {
			$('.fName-t').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})
	$('.sName').blur(function() {
		if($(this).val() == '') {
			$('.sName-t').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else {
			$('.sName-t').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})
	$('.number-a').blur(function() {
		$('.number-t').html('请填写联系电话');
		var res = /^1[3456789]\d{9}$/;
		if($(this).val() == '') {
			$('.number-t').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else if(!res.test($(this).val())) {
			$('.number-t').fadeIn().html('手机号/区号-固话格式错误');
			$(this).addClass('el-input__inner-a')
		} else {
			$('.number-t').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})
	$('.number-b').blur(function() {
		$('.number-tt').html('请填写联系电话');
		var res = /^1[3456789]\d{9}$/;
		if($(this).val() == '') {
			$('.number-tt').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else if(!res.test($(this).val())) {
			$('.number-tt').fadeIn().html('手机号/区号-固话格式错误');
			$(this).addClass('el-input__inner-a')
		} else {
			$('.number-tt').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})
	var res = /^1[3456789]\d{9}$/;
	var reg = /^\d{4}$/;
	$('.phone-a').blur(function() {
		$('.phones-a').html('请填写联系电话');

		if($(this).val() == '') {
			$('.phones-a').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else if(!res.test($(this).val())) {
			$('.phones-a').fadeIn().html('手机号格式错误');
			$(this).addClass('el-input__inner-a')
		} else {
			$('.phones-a').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}

	})
	$('.phone-b').blur(function() {

			$('.phones-b').html('请填写验证码');
			if($(this).val() == '') {
				$('.phones-b').fadeIn()
				$(this).addClass('el-input__inner-a')
			} else if(!reg.test($(this).val())) {
				$('.phones-b').fadeIn()
				$('.phones-b').html('验证码只能4位数字');
			} else {
				$('.phones-b').fadeOut()
				$(this).removeClass('el-input__inner-a')
			}
		})
		//注册
	$('.phone-s').blur(function() {
		$('.phones-s').html('请填写联系电话');
		if($(this).val() == '') {
			$('.phones-s').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else if(!res.test($(this).val())) {
			$('.phones-s').fadeIn().html('手机号格式错误');
			$(this).addClass('el-input__inner-a')
		} else {
			$('.phones-s').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})
	$('.phone-d').blur(function() {

		$('.phoned-y').html('请填写验证码');
		if($(this).val() == '') {
			$('.phoned-y').fadeIn()
			$(this).addClass('el-input__inner-a')
		} else if(!reg.test($(this).val())) {
			$('.phoned-y').fadeIn()
			$('.phoned-y').html('验证码只能4位数字');
		} else {
			$('.phoned-y').fadeOut()
			$(this).removeClass('el-input__inner-a')
		}
	})

	var bool = true;
	var timeout = 60;

	$('.phones-t').click(function() {
			$('.phones-a').html('');
			if($('.phone-a').val() == '') {
				$('.phones-a').fadeIn()
				$('.phones-a').html('请输入手机号码');
				$('.phone-a').addClass('el-input__inner-a')
			} else {
				if(bool) {
					$('.phones-t').html(timeout + '秒重新获取');
					var time = setInterval(function() {

						var test = parseFloat($('.phones-t').html()) - 1 + '秒重新获取';
						$('.phones-t').html(test);
						//					$('.phones-t').unbind('click');
						//					console.log(parseFloat(test))
						if(parseFloat(test) == 0) {
							$('.phones-t').html('获取验证码');
							$('.phone-b').val('1111');
							clearInterval(time);
							bool = true
						} else {

							$('.ty').click(function() {
								clearInterval(time);
								//$('.dl').toggleClass('disabled')
								if($('.dl').attr('class') == 'submit-btn dl') {
									$('.dl').click(function() {
										//									alert('登陆成功')
										$('.phone-b').val('');

										$('.userInfo-btn').html($('.phone-a').val());

										$('.login-1').hide();
										$('.phone-a').val('');
									})

								}
							})
						}
					}, 1000)
					bool = false;
				} else {
					return false;
				}
			}
		})
		//注册验证码

	var bool1 = true;
	var timeout1 = 60;
	$('.phoned-s').click(function() {
		$('.phones-s').html('');
		if($('.phone-s').val() == '') {
			$('.phones-s').fadeIn()
			$('.phones-s').html('请输入手机号码');
			$('.phone-s').addClass('el-input__inner-a')
		} else {
			if(bool1) {
				$('.phoned-s').html(timeout1 + '秒重新获取');
				var time = setInterval(function() {

					var test = parseFloat($('.phoned-s').html()) - 1 + '秒重新获取';
					$('.phoned-s').html(test);
					//					$('.phones-t').unbind('click');
					//					console.log(parseFloat(test))
					if(parseFloat(test) == 0) {
						$('.phoned-s').html('获取验证码');
						$('.phone-d').val('1111');
						clearInterval(time);
						bool1 = true
					} else {

						$('.zc1').click(function() {
							$('.zc').unbind();
							clearInterval(time);
							//							$('.zc').toggleClass('disabled')
							if($('.zc').attr('class') == 'submit-btn zc') {
								$('.zc').click(function() {
									$('.phone-s').val('');
									$('.phone-d').val('');
									clearInterval(time);
									alert('注册成功')
									$('.login-2').hide();

								})

							}
						})
					}
				}, 1000)
				bool1 = false;
			} else {
				return false;
			}
		}
	})

	$('.ty').click(function() {
		$(this).toggleClass('icon-circle-active')
	})
	$('.zc1').click(function() {
		$(this).toggleClass('icon-circle-active')
	})
})