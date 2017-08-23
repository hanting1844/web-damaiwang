$(function(){
		$(".top-left> ul >li").eq(2).hover(function(){
			$(".top-dm").show();
		},function(){
			$(".top-dm").hide();
		});
		$(".top-right> ul> li").eq(0).hover(function(){
			$(".top-wei").show();
		},function(){
			$(".top-wei").hide();
		});
		$(".top-right >ul >li").eq(1).hover(function(){
			$(".dm-sj").show();
		},function(){
			$(".dm-sj").hide();
		});
		$(".top-right> ul >li").eq(2).hover(function(){
			$(".top-khfu").show();
		},function(){
			$(".top-khfu").hide();
		});
		$(".dm-site-nav").hover(function(){
			$(".dm-c").show();
		},function(){
			$(".dm-c").hide();
		});
		$(".tp-x").click(function(){
			$(".tp").css("display","none")
		});
		$(".citys-top").click(function(){
			$(".header-con").css("display","block")
		});
		$(".ri-x").click(function(){
			$(".header-con").css("display","none")
		})
		

})
