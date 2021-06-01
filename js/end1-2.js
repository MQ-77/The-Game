$(document).ready(function(){
    $(".container").fadeIn(1500);
    $(".btn").delay(1000).fadeIn(1000);
})

$("#restart").click(function(){
    $(location).attr("href", "start.html");
});