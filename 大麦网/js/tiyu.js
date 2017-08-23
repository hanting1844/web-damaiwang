$(function(){
	$(".top-left> ul >li").eq(1).hover(function(){
		$(".top-dm").show();
	},function(){
		$(".top-dm").hide();
	});
	$(".top-right >ul >li").eq(0).hover(function(){
		$(".dm-sj").show();
	},function(){
		$(".dm-sj").hide();
	});
	$(".top-right> ul >li").eq(1).hover(function(){
		$(".top-khfu").show();
	},function(){
		$(".top-khfu").hide();
	});
	$(".dm-site-nav").hover(function(){
			$(".dm-c").show();
		},function(){
			$(".dm-c").hide();
		});
		
		
	$(".quick_guide_more a").hover(function(){
		$(this).addClass("om");
		$(".dm_quick_guide").show()
	},function(){
		$(this).removeClass("om");
		$(".quick_guide_more ul").hide()
	})
})
