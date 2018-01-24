
//引入jq
define(["jquery", "jquery-cookie"], function($){
    var main = function(){
        $(function(){
            $(".bottom .bot_o3 .bot_login .bot_form form .bot_name .login_txt1").blur(function(){
                var oValue = $(".bottom .bot_o3 .bot_login .bot_form form .bot_name .login_txt1").value.replace(/ /ig, "");
                $(".bottom .bot_o3 .bot_login .bot_form form .bot_name .login_txt1").value = oValue;

                $(".bottom .bot_o3 .bot_login .bot_form form .bot_name .login_txt1 span").style.display = "block";
            })

            $(".bottom .bot_o3 .bot_login .bot_form form .bot_password .login_txt1").blur(function(){
                var oPass = $(".bottom .bot_o3 .bot_login .bot_form form .bot_password .login_txt1").value.replace(/ /ig, "");
                $(".bottom .bot_o3 .bot_login .bot_form form .bot_password .login_txt1").value = oPass;

                $(".bottom .bot_o3 .bot_login .bot_form form .bot_password .login_txt1 span").style.display = "block";
            })
        })
    }
})