/* 
* @Author: anchen
* @Date:   2016-11-08 21:23:35
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-10 15:14:03
*/
$(function(){
    $("#d1,#d2,#d3,#d4").hover(function(){
            $(this).css("background", "#f28510");
    },function(){
            $(this).css("background", "#fff724");
    })

})



    window.onscroll = function(){
        var huang = document.getElementsByClassName("huang")[0];
        var ps = document.getElementsByClassName("ps")
        var top = document.documentElement.scrollTop||document.body.scrollTop;
        if(top >=580){
            huang.style.position = "fixed";
            huang.style.left = 0;
            huang .style.top = 0;
            huang.style. width = "100%"
            ps[0].style.background = "#ff6c00";
        }else{
            huang.style.position = "relative";
            ps[0].style.background = "#ffe62b";
        }

        if(top>=1050){
            ps[0].click = function(){
                var t = setInterval(function(){
                    document.documentElement.scrollTop -= 20;
                    document.body.scrollTop -=20;
                    top = document.body.scrollTop||document.documentElement.scrollTop;
                    if(top == 1050){
                        clearInterval(t)
                    }
                },10)
            }
            ps[0].style.background = "#ffe62b";
            ps[1].style.background = "#ff6c00"
        }else{
            ps[1].style.background = "#ffe62b";
        }

        if(top>=1950){
            ps[2].style.background = "#ff6c00"
            ps[0].style.background = "#ffe62b"
            ps[1].style.background = "#ffe62b"
        }else{
            ps[2].style.background = "#ffe62b"
        }
        if(top>3800){
            ps[3].style.background = "#ff6c00";
            ps[0].style.background = "#ffe62b"
            ps[1].style.background = "#ffe62b"
            ps[2].style.background = "#ffe62b"
        }else{
            ps[3].style.background = "#ffe62b"
        }
        if(top>8600){
            ps[4].style.background = "#ff6c00";
            ps[0].style.background = "#ffe62b"
            ps[1].style.background = "#ffe62b"
            ps[2].style.background = "#ffe62b"
            ps[3].style.background = "#ffe62b"
        }else{
            ps[4].style.background = "#ffe62b"
        }

    }



window.onload = function(){
    var l1 = $("#lunbo ol li");
    var l2 = $("#lunbo ul li");
    var index = 0;

    function demo(type){
        if(type == "r"){
            index++;
            if(index >= l2.length){
                index = 0;
            }
        }else if(type == "1"){
            index--;
            if(index <= -1){
                index = l2.length-1;
            }
        }
        l2.hide();
        l2.eq(index).fadeIn();
    }

    var t = setInterval(function(){
        demo("r")
    },2000);

    $("#lunbo").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(function(){
            demo("r")
        },2000)
    })

    $(".dw-left").click(function(){
        demo("1")
    })
    $(".dw-right").click(function(){
        demo("r")
    })

    $("l1").hover(function(){
        var now = $(this).index();
        $(this).css("background", "#fff");
        l1.hide();
        l1.eq(now).fadeIn();
        index = now;
    },function(){

    })
}
