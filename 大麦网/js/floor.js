$(function(){
	//tab栏切换
	$(".order-tab li").mouseenter(function(){
		var $this = $(this),
			index = $this.index();
		$this.addClass("od-at").siblings("li").removeClass("od-at");
		$(".order-add").eq(index).addClass("order-on").siblings("ul").removeClass("order-on");
	});
	
	$(".tab1 li").mouseenter(function(){
		var $this = $(this),
			index = $this.index();
		$this.addClass("active11").siblings("li").removeClass("active11");
		$(".live").eq(index).addClass("floor-on").siblings("ol").removeClass("floor-on");
	});

//div显示消失
$(".subnav-top .a1").hover(function(){
	$(this).children(".dm-aa").show()
},function(){
	$(this).children(".dm-aa").hide()
})


var num = 0, $subbnav = $(".subnav-bt"),$sideBarMenu = $(".subnav-bt .a1");
	var TOP = 0;
	 // 滚动效果
    $(window).scroll(function () {
        TOP = $(document).scrollTop();
        if(TOP >= $(".rock").offset().top){
            $sideBarMenu.eq(4).addClass("current").siblings().removeClass("current");
        } else if(TOP >= $(".kid").offset().top){
            $sideBarMenu.eq(3).addClass("current").siblings().removeClass("current");
        } else if(TOP >= $(".music").offset().top){
            $sideBarMenu.eq(2).addClass("current").siblings().removeClass("current");
        } else if(TOP >= $(".sport").offset().top){
            $sideBarMenu.eq(1).addClass("current").siblings().removeClass("current");
        }else if(TOP >= $(".xiju").offset().top){
        	$sideBarMenu.eq(0).addClass("current").siblings().removeClass("current");
        } else if(TOP >= $("#top-tp").offset().top){
            $(".subnav").fadeIn();
        }else{
            $(".subnav").fadeOut();
        }
    });
		$sideBarMenu.click(function () {
            $("html,body").stop().animate({ 
            	// 给具有相同效果的元素添加 共同的样式 floor
                "scrollTop" : $(".floor").eq($(this).index()).offset().top
            },1000);
        });
        $(".back").click(function () {
            $("html,body").animate({"scrollTop":$(".top-con").offset().top},300);
        });
        
       
})