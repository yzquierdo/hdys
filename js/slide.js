define(["jquery"], function($){
    var slide = function(){
        $(function(){
            var aBtns = $(".bot").find(".bot_ban1").find("ol").find("li");
            var oDiv  = $(".bot").find(".bot_ban1");
            var oUl = oDiv.find("ul");

            var iNow = 0;
            var timer = null;

            aBtns.hover(function(){
                iNow = $(this).eq();
                tab();
            }, function(){
                oUl.eq(iNow).animate({
                    "opacity": 0, "z-index": 2
                }, 3000, function(){});
            })

            function tab(){
                aBtns.attr("class", "");
                aBtns.eq(iNow).attr("class", "active");

                oUl.eq(iNow).animate({
                    "opacity": 1, "z-index": 4
                }, 3000, function(){});
            }

            function timerInner(){
                iNow++;
                tab();
            }

            timer = setInterval(timerInner, 2000);

            // oUl.hover(function(){
            //     clearInterval(timer);
            // }, function(){
            //     timer = setInterval(timerInner, 2000);
            // })

        })

        return "这里是广告窗代码";
    }

    return {
        slide: slide
    }
})