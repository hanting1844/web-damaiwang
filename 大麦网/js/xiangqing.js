$(function(){
	$(".m-flowers .ico").hover(function(){
		$(".m-flowers .txt").css("display","block");
		$(".m-flowers .num").css("display","none")
	},function(){
		$(".m-flowers .txt").css("display","none");
		$(".m-flowers .num").css("display","block")
	})
	
	$(".m-qrcode .tt").hover(function(){
		$(this).addClass("tt1");
		$(".m-qrcode .ct").show()
	},function(){
		$(this).removeClass("tt1");
		$(".m-qrcode .ct").hide()
	})



	$(".subitem ul li a").hover(function(){
		$(this).children(".s-ewm").show();
	},function(){
		$(this).children(".s-ewm").hide();
	})
	
	$(".m-sdlst li").hover(function(){
		$(this).addClass("z-crt").siblings().removeClass("z-crt")
	})
	
	
	var tophight=$(".m-box").height();
	$(window).scroll(function(){
		var dm=$(document).scrollTop();
		if(dm>=tophight){
			$(".mn .mm-hd").css({"position":"fixed","top":0,"border-top":"3px solid #FF4A00"});
			$(".mm-bd").css("margin-top",$(".mn .mm-hd").height());
		} else{
			$(".mn .mm-hd").css({"position":"static","border-top":"none"});
			$(".mm-bd").css("margin-top",0);
		}
	})
	
	
//	$(".mm-hd .tab li a").click(function(){
//		$(this).addClass("z-crt").siblings("a").removeClass("z-crt");
//	})
	$(".mm-hd .tab li").click(function(){
		var $this = $(this),
			index = $this.index();
		$this.addClass("z-crt").siblings("li").removeClass("z-crt");
		$(".mm-bd > div").eq(index).addClass("z-show").siblings().removeClass("z-show");
	});
	
	
})