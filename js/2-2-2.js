$(document).ready(function(){
    $(".container").fadeIn(1500);
    $(".next").delay(1000).fadeIn(1000);
})

var _relationship = window.sessionStorage.getItem("relationship");

$("button").click(function(){
    if (_relationship == "是"){
        window.location.href = "2-2-2-1.html";
    }else {
        window.location.href = "2-2-2-2.html";
    }
})