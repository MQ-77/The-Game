$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$(".couple").click(function(){
    window.sessionStorage.setItem("relationship", "是");
    next();
})

$(".single").click(function(){
    window.sessionStorage.setItem("relationship", "否");
    next();
})

function next(){
    window.location.href = "setPets.html";
}