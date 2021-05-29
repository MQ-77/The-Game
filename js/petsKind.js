$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$("#dog").click(function(){
    window.sessionStorage.setItem("petsKind", "狗狗");
    next();
})

$("#cat").click(function(){
    window.sessionStorage.setItem("petsKind", "貓咪");
    next();
})

function next(){
    window.location.href = "toStart.html";
}