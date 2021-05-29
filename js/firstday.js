$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$("#outdoor").click(function(){
    $(location).attr("href", "1.html");
});

$("#home").click(function(){
    $(location).attr("href", "2.html");
})