$(function(){
	$(document).ready(function(){
				$(".noe").mouseover(function(){
					$(this).css("box-shadow","0 0 5px #8b99b2");
					$(".taxi").css({"background":"url(images/Rectangle_hover@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".sp").css("color","#f16622")
				})
				$(".noe").mouseout(function(){
					$(this).css("box-shadow","none");
					$(".taxi").css({"background":"url(images/Rectangle@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".sp").css("color","#1C2B3D")
				})
				$(".two").mouseover(function(){
					$(this).css("box-shadow","0 0 5px #8b99b2");
					$(".key").css({"background":"url(images/Rectangle2_hover@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".tc").css("color","#f16622")
				})
				$(".two").mouseout(function(){
					$(this).css("box-shadow","none");
					$(".key").css({"background":"url(images/Rectangle2@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".tc").css("color","#1C2B3D")
				})
				$(".thre").mouseover(function(){
					$(this).css("box-shadow","0 0 5px #8b99b2");
					$(".vip").css({"background":"url(images/ic_vipgift_hover@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".hy").css("color","#f16622")
				})
				$(".thre").mouseout(function(){
					$(this).css("box-shadow","none");
					$(".vip").css({"background":"url(images/ic_vipgift@2x.png) center no-repeat","background-size":"70px 70px"})
					$(".hy").css("color","#1C2B3D")
				})
				
			})

	var inputs = document.getElementById("mobile");
			inputs.onblur = function(){
				var reg = /^1[3456789]\d{9}$/;
				var str = this.value;
				if(!reg.test(str)){
					alert("您的手机号码输入有误！")
				}
			}
			var yanzheng = document.getElementById("yanZheng");
			yanzheng.onblur = function(){
				var reg = /^1[3456789]\d{9}$/;
				var str = this.value;
				if(!reg.test(str)){
					alert("您的手机号码输入有误！")
				}
			}

})
