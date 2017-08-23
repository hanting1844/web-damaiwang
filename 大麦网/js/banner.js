$(function(){
	var num=0;
	function fn(){
		num++;
		if (num>4) {
			num=0;
		};
		$(".box > ul > li").eq(num).addClass("active").siblings().removeClass("active")
		$(".banner-lst > li").eq(num).stop().fadeIn().siblings().fadeOut()
	}
	
	var timer=null;
	timer=setInterval(function(){
		fn()
	},2000);
	
	$(".slide-main").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function(){
			fn()
		},2000);
	});
	
	$(".box > ul > li").click(function(){
		num=$(this).index();
		if (num>4) {
			num=0;
		};
		$(".box > ul > li").eq(num).addClass("active").siblings().removeClass("active")
		$(".banner-lst > li").eq(num).stop().fadeIn().siblings().fadeOut()
	})
	
	$(".slide-main").hover(function(){
		$(".skip").show()
	},function(){
		$(".skip").hide()
	});
	
	$(".next").click(function(){
		fn();
	});
	$(".prev").click(function(){
		num--;
		if (num<0) {
			num=4;
		};
		$(".box > ul > li").eq(num).addClass("active").siblings().removeClass("active")
		$(".banner-lst > li").eq(num).stop().fadeIn().siblings().fadeOut()
	})
	
})



//$(function(){
//	var num=0,$sort=$(".sort-list"),$list=$(".sort-list-l");
//	$list.each(function(index,ele){
//		num = index * 22;
//		$(ele).css("background-position","0 -"+num + "px")
//	})
//	
//})