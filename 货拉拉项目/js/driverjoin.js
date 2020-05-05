window.onload = function() {
	var bg = document.getElementsByClassName("bg-orange")[0];
	var checkboxDom = document.getElementById('check1');
	var tipsDom = document.getElementsByClassName("tips")[0];
	var iconDom = document.getElementsByClassName("icon-warning")[0];
	var bgwDom = document.getElementsByClassName("bg-wu")[0];
	var numDom = document.getElementsByClassName("number");
	var codeContent = document.getElementsByClassName("code-content")[0].getElementsByTagName("a")[0]
	console.log(codeContent)
	//有车加入
	bg.onclick = function() {
		var re = /^1\d{10}$/
		if(!checkboxDom.checked == true) {
			tipsDom.innerHTML = "请先认真阅读并勾选《软件使用信息服务协议》"
			iconDom.style.background = 'url(images/ic_warning_nav.png)'
			iconDom.style.backgroundSize = '100%'
		} else if(checkboxDom.checked == true) {

			tipsDom.innerHTML = "请输入正确的手机号码"
			iconDom.style.background = 'url(images/ic_warning_nav.png)'
			iconDom.style.backgroundSize = '100%'

			if(re.test(numDom[0].value)) {
				tipsDom.innerHTML = "请输入验证码"
				iconDom.style.background = 'url(images/ic_warning_nav.png)'
				iconDom.style.backgroundSize = '100%'

				if(numDom[1].value != "") {
					tipsDom.innerHTML = ""
					iconDom.style.background = ''

					//			setTimeout(function(){
					//				tipsDom.innerHTML = ""
					//			iconDom.style.background = ''
					//				window.open("../success.html")
					//			},2000)

				}

			}

		}

	}
	//获取验证码
	var num = 60 //秒数
	var flag = true //判断是否可以点击
	var time = null //定时器名字
	codeContent.onclick = function() {
		//点击时判断是否可点击
		if(flag == true) {

			//将可点击设置为false
			flag = false
			time = setInterval(function() {

				if(num <= 0) {
					//判断秒数小于等于0
					//清楚定时器，并把可点击设置为true
					//num又设置为60，重新获取
					clearInterval(time)
					flag = true
					codeContent.innerHTML = "重新获取"
					num = 60
				} else {
					//否则还剩多少秒
					num -= 1
					codeContent.innerHTML = "还剩" + num + "秒"

				}

			}, 1000)
		}

	}

	//无车加入
	bgwDom.onclick = function() {
		if(!checkboxDom.checked == true) {
			tipsDom.innerHTML = "请先认真阅读并勾选《货拉拉服务协议》"
			iconDom.style.background = 'url(images/ic_warning_nav.png)'
			iconDom.style.backgroundSize = '100%'
		} else if(checkboxDom.checked == true) {
			tipsDom.innerHTML = "请输入正确的手机号码"
			iconDom.style.background = 'url(images/ic_warning_nav.png)'
			iconDom.style.backgroundSize = '100%'
		}
	};

	/*点击手机号框提示隐藏*/
	numDom[0].onclick = function() {
		tipsDom.innerHTML = '';
		iconDom.style.background = '';
	}

	//手机号码验证
	// bg.onclick = function(){
	// 	var reg = /^1\d{10}$/
	//  var str = numDom.value
	//  if(!reg.test(str)){
	//  	tipsDom.innerHTML = "请输入正确的手机号码"
	//  	iconDom.style.background='url(images/ic_warning_nav.png)'
	//  	iconDom.style.backgroundSize='100%'
	//  	 return false;
	//  }
	// }

	/*定位显示*/
	var ptohoDom = document.getElementById("ptoho");
	var cityDom = document.getElementsByClassName("city")[0];
	ptohoDom.onclick = function() {
		if(cityDom.style.display == "none") {
			cityDom.style.display = "block";
		} else {
			cityDom.style.display = "none";
		}

	}
	$('.shenzhen').click(function(){
		console.log($(this).html())
		$('.test').val($(this).html())
		$('.city').hide()
	})
	
}