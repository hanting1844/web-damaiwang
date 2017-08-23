$(function() {
	$(".hot-tab a").mouseenter(function() {
		var $this = $(this),
			index = $this.index();
		$this.addClass("z-sel").siblings("a").removeClass("z-sel");
		$(".hot-box ul").eq(index).addClass("z-act").siblings("ul").removeClass("z-act");
	});
	
	
	//登录页面
	$(".account_con .m_layer_tab li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".dlform_block").eq($(this).index()).addClass("dlform_1").siblings().removeClass("dlform_1")
	})
	
	$(".layer_text1").click(function(){
		$(".pt30 div").addClass("account_inner1").siblings("input").removeClass("account_inner1")
	})
	
	//
	
	
})

