{
    $(document).ready(function(){

        $("#zhang").click(function(){
            $("#table_zhanghao").show();
            $("#table_yanzheng").hide();
            $("#zhang_span").addClass("meth_sss");
            $("#yanzheng_span").removeClass("meth_sss");

        });
        $("#yanzheng").click(function(){
            $("#table_zhanghao").hide();
            $("#table_yanzheng").show();
            $("#zhang_span").removeClass("meth_sss");
            $("#yanzheng_span").addClass("meth_sss");
        });
        
    })
}