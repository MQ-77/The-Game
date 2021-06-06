$(document).ready(function(){
    $(".container").fadeIn(1500);
    $(".next").delay(1000).fadeIn(1000);
})

var _relationship = window.sessionStorage.getItem("relationship");
var _pets = window.sessionStorage.getItem("pets");

if (_pets == "是"){
    var _petsKind = window.sessionStorage.getItem("petsKind");
}

$("button").click(function(){
    if (_relationship == "是"){
        window.location.href = "2-1-1.html";
    } else if (_petsKind == "貓咪"){
        window.location.href = "2-1-2.html";
    } else if (_petsKind == "狗狗"){
        window.location.href = "2-1-3.html";
    } else{
        window.location.href = "2-1-4.html";
    }
})