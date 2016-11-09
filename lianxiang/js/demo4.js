/* 
* @Author: anchen
* @Date:   2016-11-08 21:23:35
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-08 23:24:41
*/
$(function(){
    $("#d1,#d2,#d3,#d4").hover(function(){
            $(this).css("background", "#f28510");
    },function(){
            $(this).css("background", "#fff724");
    })

})

window.onload = function(){

    window.onscroll = function(){
        var huang = document.getElementsByClassName("huang")[0];
        
        var top = document.documentElement.scrollTop||document.body.scrollTop;
        if(top >=595){
            huang.style.position = "fixed";
            huang.style.left = 0;
            huang .style.top = 0;
            huang.style. width = "100%"
        }else{
            huang.style.position = "relative";
        }
    }
}
