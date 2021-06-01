$(document).ready(function(){
    $(".container").fadeIn(1500);
})

var _pets = window.sessionStorage.getItem("pets");

$(".wash_clothes").click(function(){
    if (_pets == "是"){
        window.location.href = "2-3-1-1.html";
    }else {
        window.location.href = "2-3-1-2.html";
    }
});

$(".sweep").click(function(){
    if (_pets == "是"){
        window.location.href = "2-3-2-1.html";
    }else {
        window.location.href = "2-3-2-2.html";
    }
})