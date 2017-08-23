$(function(){
	$(".search_city_up").click(function(){
		$(this).hide()
		$(".search_city_off").css("display","block")
		$(".search_city_all").css("height","auto")
	})
	$(".search_city_off").click(function(){
		$(this).hide()
		$(".search_city_up").show()
		$(".search_city_all").css("height","62px")
	})
	
	$(".search_list_way li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".search_list_loading li").slideDown()
		setTimeout(function(){
			$(".search_list_loading li").slideUp()
		},800)	
		
	})
	
	$(".totop").click(function () {
        $("html,body").animate({"scrollTop":$(".top-con").offset().top},300);
    });
    
    $(".search_icon").on("click",function(){
    	$(".search_list").addClass("search_pic_list").siblings().removeClass("search_pic_list")
    })
    
       
})

$(function ($)
    {
        var p = $ ('.search_list');
        var array = p.children ('li');
        $(".search_list_way li").click(function(){
        		array.sort (function (){
	            var rand = Math.random ();
	            if (rand > 0.5)
	            {
	                return 1;
	            }
	            else
	            {
	                return -1;
	            }
	        });
	        array.each (function (i, dom){
	            p.append ($ (this));
	        });
        })
        
    });
    
//window.onload=function(){
//	var oSpan=document.getElementsByTagName("span")[0];
//	var oButton=document.getElementsByClassName("search_sort_prev")[0];
//	for(var i=0;i<5;i++){
//				  fn(i)
//			  }
//	
//}

