define(["jquery", "jquery-cookie"], function($){
    var index1 = function(){

        $(function(){
            $.ajax({
                url: "../data/indexb1.json",
                type: "GET",
                success: function(res){
                    alert(res)
                }
            })
        })
    }
})