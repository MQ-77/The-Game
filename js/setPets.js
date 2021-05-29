$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$("#pets").click(function(){
    window.sessionStorage.setItem("pets", "是");
    next1();
})

$("#no_pets").click(function(){
    window.sessionStorage.setItem("pets", "否");
    next2();
})

function next1(){
    window.location.href = "petsKind.html";
}

function next2(){
    window.location.href = "toStart.html";
}