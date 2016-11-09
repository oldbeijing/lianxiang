		function startMove(obj, json, func){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){

				var bStop = true; 

				//1.取出该属性的初值
				for(var attr in json){
					var iCur = 0;
					if(attr == "opacity"){
						iCur = parseFloat(getStyle(obj, attr)) * 100;
					}else{
						iCur = parseInt(getStyle(obj, attr))
					}
					var speed = (json[attr] - iCur) / 8;
					//8 缩放系数,缓冲运动效果最好的缩放系数
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(iCur != json[attr]){
						bStop = false;
					}
					if(attr == "opacity"){
						obj.style.filter = "alpha(opacity: " + (iCur + speed) + ")";
						obj.style.opacity = (iCur + speed) / 100;
					}else{
						obj.style[attr] = iCur + speed + "px";
					}
				}
				if(bStop){
					clearInterval(obj.timer);
					if(func){
						func();
					}
				}
			}, 30);
		}


		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}


		window.onload = function(){
		//今日推荐
		var ooDiv = document.getElementsByClassName("days")[0];
		var ooUl = document.getElementsByClassName("days")[0].getElementsByTagName("ul")[0];
		var aLi = ooUl.getElementsByTagName("li");

		//多添加了一份在当前ooUl的后面
		ooUl.innerHTML += ooUl.innerHTML;
		ooUl.style.width = aLi.length * aLi[0].offsetWidth + "px";

		var timer = null;
		timer = setInterval(function(){
			if(ooUl.offsetLeft <= -ooUl.offsetWidth / 2){
				ooUl.style.left = 0;
			}
			startMove(ooUl, {left: ooUl.offsetLeft - aLi[0].offsetWidth});
			
		}, 2000);
	}


	//明星单品
	       $(function(){
                        $(".str-pic ul").hover(function(){
                            $(this).css("border-top", "1px solid red");
                        },function(){
                            $(this).css("border-top", "1px solid #e6e6e6")
                        })
                    })

	       $(function(){
	       	$(".isstr").nextAll().find("ul").find("li").eq(1).find("a").css("color","#000");
	       	$(".isstr").nextAll().find("ul").find("li").eq(2).find("a").css("color","#999");
	       	$(".isstr").nextAll().find("ul").find("li").eq(3).find("a").css("color","red");
	       })


	       $(function(){
	       	$(".str-pic").find("ul").find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").find("li").eq(3).find("a").css("color", "red");

	       	$(".str-pic").find("ul").eq(1).find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").eq(1).find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").eq(1).find("li").eq(3).find("a").css("color", "red");

	       	$(".str-pic").find("ul").eq(2).find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").eq(2).find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").eq(2).find("li").eq(3).find("a").css("color", "red");

	       	$(".str-pic").find("ul").eq(3).find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").eq(3).find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").eq(3).find("li").eq(3).find("a").css("color", "red");

	       	$(".str-pic").find("ul").eq(4).find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").eq(4).find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").eq(4).find("li").eq(3).find("a").css("color", "red");

	       	$(".str-pic").find("ul").eq(5).find("li").eq(1).find("a").css("color", "#000");
	       	$(".str-pic").find("ul").eq(5).find("li").eq(2).find("a").css("color", "#999");
	       	$(".str-pic").find("ul").eq(5).find("li").eq(3).find("a").css("color", "red");
	       })
		

$(function(){
	$(".dong ul li a img").hover(function(){
		$(this).stop().animate({width:180,},300);	
	},(function(){
		$(this).stop().animate({width:164,},200);
	}))
})

$(function(){
	$(".sex ul li a img").hover(function(){
		$(this).css("opacity","1")
	},function(){
		$(this).css("opacity","0.7")
	})
})


/*****************/
$(function(){
            var p = $(".tops").find("p");
            $(".tops").find("p").css("color", "#c31212")
            var iNow = 0; //记录当前被选中的按钮
            var timer = 0; //记录定时器

            timer = setInterval(timerInner, 4000);
            function timerInner(){
                iNow++;
                tab();
            }
            function tab(){
                p.animate({top: -20 * iNow}, function(){
                    if(iNow == p.size() - 1){
                        iNow = 0;
                        p.css("top", 0);
                    }
                })
            }
        })

/*************************/

$(function(){
	var aBtn = $(".left4").find("ol").find("li");
	var oUl = $(".left4").find("ul");
	var aLi = oUl.find("li");

	var iNow = 0; //记录当前被选中的按钮
	var timer = 0; //记录定时器
	aBtn.click(function(){
		iNow = $(this).index();
		tab();
	})

	timer = setInterval(timerInner, 2000);

	function timerInner(){
		iNow++;
		tab();
	}

	$(".left4").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 3000);
	})



	function tab(){
		aBtn.attr("className", "");
		aBtn.eq(iNow).attr("className", "active");
		if(iNow == aLi.size() - 1){
			aBtn.eq(0).attr("className", "active");
		}

		oUl.animate({top: - 366 * iNow},10, function(){
			if(iNow == aLi.size() - 1){
				iNow = 0;
				oUl.css("top", 0);
			}
		})
	}
})


                $(function(){

                    $(".banner .ull li:eq(0)").hover(function(){
                        $(this).find("a").css("color", "red");
                        $(".ban_right1").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	 $(this).find("a").css("color", "black");
                        $(".ban_right1").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                     $(".banner .ull li:eq(1)").hover(function(){
                        $(this).find("a").css("color", "red");
                        $(".ban_right2").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	 $(this).find("a").css("color", "black");
                        $(".ban_right2").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                      $(".banner .ull li:eq(2)").hover(function(){
                         $(this).find("a").css("color", "red");
                        $(".ban_right3").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right3").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })
                      
                        $(".banner .ull li:eq(4)").hover(function(){
                            $(this).find("a").css("color", "red");
                        $(".ban_right5").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right5").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                         $(".banner .ull li:eq(5)").hover(function(){
                            $(this).find("a").css("color", "red");
                        $(".ban_right6").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right6").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                          $(".banner .ull li:eq(6)").hover(function(){
                           $(this).find("a").css("color", "red");
                        $(".ban_right7").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right7").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                           $(".banner .ull li:eq(7)").hover(function(){
                         $(this).find("a").css("color", "red");
                         $(".ban_right8").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right8").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })

                            $(".banner .ull li:eq(8)").hover(function(){
                               $(this).find("a").css("color", "red");
                        $(".ban_right9").css("display","block");
                        $(".ban_right4").css('display', "none")
                    },function(){
                    	$(this).find("a").css("color", "black");
                        $(".ban_right9").css("display", "none");
                        $(".ban_right4").css("display", "block")
                    })
                })

/************/

$(function(){
	$(".seekright").find("div").hover(function(){
		$(this).find("a").eq(1).css("display", "block")
		$(this).find("a").eq(0).css("display", "none")
	},function(){
		$(this).find("a").eq(0).css("display", "block")
		$(this).find("a").eq(1).css("display", "none")
	})
})


/****登录****/
 //登录效果
            //普通登录
            $(function(){
                $(".top .top_right li:eq(0)").click(function(){
                    $(".enter").css("left",($(window).width() - $(".enter").outerWidth())/2);
                    $(".enter").css("display", "block").css("margin-top", "50px")
                     return false;
                });
                 //快捷登录
                $(".shortcut").click(function(){
                    //.common{display: inline-block; font-size: 14px; width: 215px; color: #f30003; text-align: center; height: 37px ; line-height: 37px; border-bottom: 3px solid #f30003;float:left;}
                    // .shortcut{display: inline-block; font-size: 14px; width: 215px; color: #c4c4c4; text-align: center; height: 37px ; line-height: 37px;float:right;}
                    $(this).css("border-bottom", "3px solid #f30003").css("color", "#f30003");
                    $(".common").css("color", "#c4c4c4").css("border-bottom", "none");
  
                    return false;
                
                })

                 $(".common").click(function(){
                    //.common{display: inline-block; font-size: 14px; width: 215px; color: #f30003; text-align: center; height: 37px ; line-height: 37px; border-bottom: 3px solid #f30003;float:left;}
                    // .shortcut{display: inline-block; font-size: 14px; width: 215px; color: #c4c4c4; text-align: center; height: 37px ; line-height: 37px;float:right;}
                    $(this).css("border-bottom", "3px solid #f30003").css("color", "#f30003")
                    $(".shortcut").css("color", "#c4c4c4").css("border-bottom", "none");

                    return false;
                
                })
                //关闭按钮
                $(".enter_close").click(function(){
                    $(".enter_close").offsetParent().remove();
                });
            })

		/********************注册*/
 $(function(){
                $(".top .top_right li:eq(1)").click(function(){
                    $(".login").css("left",($(window).width() - $(".enter").outerWidth())/2);
                    $(".login").css("display", "block").css("margin-top", "50px")
                     return false;
                });

                //关闭按钮
                $(".close2").click(function(){
                    $(this).offsetParent().remove();
                });
            })





/**/
/****/
/*****************/
/*处理cookie操作的函数(对函数做说明注释,增进程序员之间的感情,亲,你累了么,喝点红牛)*/
function getDate(n){
	var d = new Date();
	var day = d.getDate();
	day += n;
	d.setDate(day);
	return d;
}
function setCookie(name, value, expires, path, domain, isSecure){
	var cookieText = encodeURIComponent(name) + "=" +encodeURIComponent(value);
	//判断是否进行传参
	/*if(expires){
		cookieText += ";expires=" + expires;
	}*/
	if(expires instanceof Date){ //判断当前传入的参数是否是一个日期对象(这样判断更加严谨)
		cookieText += ";expires=" + expires;
	}
	if(path){
		cookieText += ";path=" + path;
	}
	if(domain){
		cookieText += ";domain" + domain;
	}
	if(isSecure){ //true/false
		cookieText += ";secure";
	}
	document.cookie = cookieText;
}


//【注】传入对应的健,获取cookie缓存中对应的值
function getCookie(name){
	var cookieText = decodeURIComponent(document.cookie);
	//1.首先找到键的位置
	var start = cookieText.indexOf(name);
	if(start == -1){
		return;
	}else{
		//找到结束下标
		var end = cookieText.indexOf(";", start);
		if(end == -1){
			end = cookieText.length;
		}
	}
	//3.字符串提取
	var str = cookieText.substring(start, end);
	//4.字符串分割
	var arr = str.split("=");
	return arr[1];
}



function removeCookie(name){
	document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
}


/*获取当前样式的方法*/
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}



		//生成验证码(字母数字组合)
		//A 65 ~ 90
		//a 97 ~ 122  10 ~ 35 + 87
		//数字 0 ~ 9

		//随机 0 ~ 99 的数  parseInt(Math.random() * 100);

function testCode(n){ //传入n,生成n位的验证码
	var arr = []; //记录每一次生成的验证码
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			var charStr = String.fromCharCode(num + 87);
			arr.push(charStr);
		}else if(num >= 65 && num <= 90){
			var charStr = String.fromCharCode(num);
			arr.push(charStr);
		}else{
			i--; //再去将那次无用操作补回来
		}
	}
	return arr.join("");
}


//封装获取元素节点的方法
/*
【注】这些方法的使用频率都非常高,书写起来很不方便,可读性差
getElementById   	    	#id
getElementsByTagName		div
getElementsByName           name=value
getElementsByClassName     .class
*/

//传参规则: 如果是id(#id)  如果是class(.class) 如果是name(name=value) 如果是标签名(div)

/*function $(str){
	var subStr = str.substring(0, 5);
	if(subStr == "name="){
		//1.说明是name
		return document.getElementsByName(str.substring(5));
	}else if(str[0] == "#"){
		return document.getElementById(str.substring(1));
	}else if(str[0] == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}*/


/*function $(id){
	return document.getElementById(id);
}
*/

//判断当前字符是否是字母下划线
function isTrueChar(charStr){
	if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr == "_"){
		return true;
	}else{
		return false;
	}
}

function isTrueName(charStr){
	if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr == "_" || charStr >= "0" && charStr <= "9"){
		return true;
	}else{
		return false;
	}
}




	/*登录限制条件*/
window.onload = function(){
			//判断之前是否有cookie缓存,如果有,只用之前用户名和密码进行登录
			if(getCookie("name_p")){
				alert("使用cookie缓存进行登录");
				alert("name_p:" + getCookie("name_p") + "; inp1:" + getCookie("inp1"));
			}


			//1.页面加载完成的时候生成一次验证
			/*$("#div_code").innerHTML = testCode(4);
			$("#div_code").onclick = function(){
				// this.innerHTML = testCode(4);
				$("#div_code").innerHTML = testCode(4);
			}*/


			//2.判断当前用户名和密码是否合法,判断在失去焦点的时候完成
			var name_p = document.getElementsByClassName("name_p")[0];
			var hint1 = document.getElementsByClassName("hint1")[0];
			var hint2 = document.getElementsByClassName("hint2")[0];
			var inp1 = document.getElementsByClassName("inp1")[0];
			var enter_p = document.getElementsByClassName("enter_p")[0];
			name_p.onblur = function(){
				//<1>获取输入框内的值
				//$("#username").value
				//<2>清除多余的空格
				var oValue = this.value.replace(/ /g, "");
				this.value = oValue;
				if(oValue.length >= 6 && oValue.length <= 18){
					if(/^\d/.test(oValue)){
						hint1.innerHTML = "用户名不能以数字开头";
					}else{
						if(/\W/.test(oValue)){
							$(".hint1").innerHTML = "用户名必须由数字字母下划线组成";
						}else{
							$(".hint1").innerHTML = "✅";
						}
					}
				}else{
					hint1.innerHTML = "用户名应该是6~18位";
				}
			}

			inp1.onblur = function(){
				//【强】 【一般】 【弱】
				if(this.value.length >= 6 && this.value.length <= 18){
					//判断密码强度
					//$("#password_span").style.color = "green";
					if(/\d/.test(this.value) && /[a-z]/.test(this.value) && /[A-Z]/.test(this.value)){
						hint2.innerHTML = "【强】";
					}else if(/^\d+$/.test(this.value) || /^[a-z]+$/.test(this.value) || /^[A-Z]+$/.test(this.value)){
						hint2.innerHTML = "【弱】";
					}else{
						hint2.innerHTML = "【一般】";
					}
				}else{
					//$("#password_span").style.color = "red";
					hint2.innerHTML = "密码长度应该是6~18位";
				}
			}

			enter_p.onclick = function(){
				//获取用户名和密码的值,进行cookie缓存
				setCookie("name_p", name_p.value, getDate(5));
				setCookie("inp1", inp1.value, getDate(5));
				alert("登录成功");
			}

		}

/*****************注册限制条件***************/

window.onload = function(){
			//判断之前是否有cookie缓存,如果有,只用之前用户名和密码进行登录
			if(getCookie("p_zhanghao")){
				alert("使用cookie缓存进行登录");
				alert("p_zhanghao:" + getCookie("p_zhanghao") + "; in_mima1:" + getCookie("in_mima1"));
			}

			var in_zhanghao = document.getElementById("in_zhanghao");
			var p_zhanghao = document.getElementsByClassName("p_zhanghao")[0];
			var in_mima1 = document.getElementById("in_mima1");
			var p_mima1 = document.getElementsByClassName("p_mima1")[0];
			var in_mima2 = document.getElementById("in_mima2");
			var p_mima2 = document.getElementsByClassName("p_mima2")[0];
			var in_zhanghao = document.getElementById("in_zhanghao");
			var p_zhanghao = document.getElementsByClassName("p_zhanghao")[0];
			var in_yanzheng = document.getElementById("in_yanzheng");
			var p_yanzheng = document.getElementsByClassName("p_yanzheng")[0];
			var zhuce = document.getElementsByClassName("zhuce")[0];
			


			//1.页面加载完成的时候生成一次验证
			p_yanzheng.innerHTML = testCode(4);
			p_yanzheng.onclick = function(){
				 this.innerHTML = testCode(4);
				p_yanzheng.innerHTML = testCode(4);
			}

			//2.判断当前用户名和密码是否合法,判断在失去焦点的时候完成


			in_zhanghao.onblur = function(){
				//<1>获取输入框内的值
				//$("#username").value
				//<2>清除多余的空格
				var oValue = this.value.replace(/ /g, "");
				this.value = oValue;
				if(oValue.length >= 6 && oValue.length <= 18){
					if(/^\d/.test(oValue)){
						p_zhanghao.innerHTML = "用户名不能以数字开头";
					}else{
						if(/\W/.test(oValue)){
							p_zhanghao.innerHTML = "用户名必须由数字字母下划线组成";
						}else{
							p_zhanghao.innerHTML = "✅";
						}
					}
				}else{
					p_zhanghao.innerHTML = "用户名应该是6~18位";
				}
			}

			in_mima1.onblur = function(){
				//【强】 【一般】 【弱】
				if(this.value.length >= 6 && this.value.length <= 18){
					//判断密码强度
					//$("#password_span").style.color = "green";
					if(/\d/.test(this.value) && /[a-z]/.test(this.value) && /[A-Z]/.test(this.value)){
						p_mima1.innerHTML = "【强】";
					}else if(/^\d+$/.test(this.value) || /^[a-z]+$/.test(this.value) || /^[A-Z]+$/.test(this.value)){
						p_mima1.innerHTML = "【弱】";
					}else{
						p_mima1.innerHTML = "【一般】";
					}
				}else{
					//$("#password_span").style.color = "red";
					in_mima1.innerHTML = "密码长度应该是6~18位";
				}
			}



			zhuce.onclick = function(){
				//获取用户名和密码的值,进行cookie缓存
				setCookie("in_zhanghao", in_zhanghao.value, getDate(5));
				setCookie("in_mima1", in_mima1.value, getDate(5));
				alert("注册成功");
			}
		}

		

//demo 部分
$(function(){
    $(".b_left").find("ul").find('li').click(function(){
        $(this).css("background", "#000");
        return false;
    })
})

$(function(){
    $(".move").click(function(){
        $(".cs5").css('display', "block");
        $(".cs6").css('display', "block");
        $(".cs7").css('display', "block");
        $(".cs8").css('display', "block");
        $(".cs9").css('display', "block");
        $(".cs10").css('display', "block");
        $(this).css("display", "none");
        $('.pack_up').css("display", "block")
    })

    $(".pack_up").click(function(){
        $(".cs5").css('display', "none");
        $(".cs6").css('display', "none");
        $(".cs7").css('display', "none");
        $(".cs8").css('display', "none");
        $(".cs9").css('display', "none");
        $(".cs10").css('display', "none");
        $(this).css("display", "none");
        $('.move').css("display", "block")

    })

    $("#checkbox").click(function(){
            var input = $('<input type = "checkbox">');
            //$(this).parent().find("ul").prependTo('input')
            $('input').prependTo($(this).parent().parent().find("ul").find("li"));
    })
})
 








