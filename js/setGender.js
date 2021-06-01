$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$(".male").click(function(){
    window.sessionStorage.setItem("gender", "男性");
    next();
})

$(".female").click(function(){
    window.sessionStorage.setItem("gender", "女性");
    next();
})

$(".both").click(function(){
    window.sessionStorage.setItem("gender", "自我認定");
    next();
})

function next(){
    window.location.href = "setName.html";
}
