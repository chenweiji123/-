$(function() {
	var arr = [".car ul li:eq(0)", ".car ul li:eq(1)", ".car ul li:eq(2)", ".car ul li:eq(3)"];
	var arr1 = ['￥ 1000', '￥ 2000', '￥ 3000', '￥ 4000']
	var i = 0;
	$("#ileft").click(function() {
		if(i <= 3) {
			$("#emRigth").css("opacity", '1')
			$(arr[i]).removeClass("xuan");
			i--;
			if(i <= 0) {
				i = 0
				$(this).css("opacity", '.5')
			}
			$(arr[i]).addClass("xuan");
			$(".span2").text(arr1[i]);
		} else {
			$(this).css("opacity", '.5')
		}
	})
	$("#emRigth").click(function() {
		if(i >= 0) {
			$("#ileft").css("opacity", "1");
			$(arr[i]).removeClass("xuan");
			i++;
			if(i >= 3) {
				i = 3
				$(this).css("opacity", '.5')
			}
			$(arr[i]).addClass("xuan");
			$(".span2").text(arr1[i]);
		}
	})
	$(".car ul").children("li").click(function() {
		i = $(this).index();
		for(var j = 0; j < arr.length; j++) {
			$(arr[j]).removeClass("xuan");
		}
		$(arr[i]).addClass("xuan");
		$(".span2").text(arr1[i]);
	})
	$(".pFive i").click(function() {
		$(this).toggleClass("iOne")
	})

	$(".xuOne img").click(function() {
		$("#meideng").css("display", "block");
		$(".zi").html("您没有预定司机！");
	})
	$(".bnt").click(function() {
		$("#meideng").css("display", "block");
		$(".zi").html("您未设定常用路线！");
	})
	$(".spFour").click(function() {
		$("#meideng").css("display", "block");
		$(".zi").html("您未设定固定目的地！");
	})
	$(".bnt1R").click(function() {
		var str = $("#uname").val();
		var str1 = $("#phone").val();
		var reg = /^[\u4e00-\u9fa5]{2,6}$/;
		var reg1 = /^1[578]\d{9}$/;
		if(str == '' || str1 == "") {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人称呼和电话不能为空！");
		} else if(!reg.test(str)) {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人称呼格式不正确！应为2-6个中文汉字！");
		} else if(!reg1.test(str1)) {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人电话格式不正确！应为15|17|18 开头的13位电话号码！");
		} else {
			$("#meideng").css("display", "block");
			$(".zi").html("预订成功，稍后电话联系您···");
		}
	})
	$(".bnt1L").click(function() {
		var str = $("#uname").val();
		var str1 = $("#phone").val();
		var reg = /^[\u4e00-\u9fa5]{2,6}$/;
		var reg1 = /^1[578]\d{9}$/;
		if(str == '' || str1 == "") {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人称呼和电话不能为空！");
		} else if(!reg.test(str)) {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人称呼格式不正确！应为2-6个中文汉字！");
		} else if(!reg1.test(str1)) {
			$("#meideng").css("display", "block");
			$(".zi").html("联系人电话格式不正确！应为15|17|18 开头的13位电话号码！");
		} else {
			$("#meideng").css("display", "block");
			$(".zi").html("请稍等，正在电话联系您···");
		}
	})

$(".muceM").click(function() {
	$("#meideng").css("display", "block");
	$(".zi").html("您还未点单");
})
$(".muceB").click(function() {
	$("#meideng").css("display", "block");
	$(".zi").html("您还没有预选的司机");
})
$("#tiao").click(function() {
	$("#meideng").css("display", "none");
})
var a;
var rag = /(^\s*|\s*$)/g
var b;
$("#starp").focus(function() {
	$(".sheng").css({
		display: "block",
		top: 120,
	})
})
$("#endp").focus(function() {
	$(".sheng").css({
		display: "block",
		top: 170,
	})
})

$(".sheng ul").children("li").click(function() {
	if($(".sheng").css("top") == "120px") {
		a = "";
		a = $(this).html();
		a = a.replace(rag, "");
		$("#starp").val(a);
		$(".sheng").css("display", "none");
		$(".qu").eq($(this).index()).css({
			display: "block",
			top: 120,
		})
		$(".qu ul").children("li").click(function() {
			b = "";
			b = $(this).html();
			b = b.replace(rag, "");
			a = a + "-" + b;
			$("#starp").val(a);
			$(".qu").css("display", "none")
		})
	} else if($(".sheng").css("top") == "170px") {
		a = "";
		a = $(this).html();
		a = a.replace(rag, "");
		$("#endp").val(a);
		$(".sheng").css("display", "none");
		$(".qu").eq($(this).index()).css({
			display: "block",
			top: 170,
		})
		$(".qu ul").children("li").click(function() {
			b = "";
			b = $(this).html();
			b = b.replace(rag, "");
			a = a + "-" + b;
			$("#endp").val(a);
			$(".qu").css("display", "none")
		})
	}

})
$(".xuTwo").click(function() {
	$(".xueq").css("display", "block");
})
$(".xueq textarea").blur(function() {
	if($(this).val() == "") {
		$(".xueq").css("display", "none");
	}
})})