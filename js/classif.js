{
    // 点击左侧列表右侧界面随之改变
    function $(v){return document.getElementById(v);}
        var x=0;
        function c(y){
        $("r"+x).style.display = "none";
        $("r"+y).style.display = "";
        x=y
        }
}