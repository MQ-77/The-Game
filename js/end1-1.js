$(document).ready(function(){
    $(".container, #p1").fadeIn(1000);
    var index = 2;
    function type() {  
        $("#p" + index).fadeIn(1500);
        index++;
    }
    setInterval(type, 2000);
})

$(document).click(function(){
    $(".next").fadeIn(1000);
})

$("button").click(function(){
    $(location).attr("href", "end1-2.html");
});