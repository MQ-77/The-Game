$(document).ready(function(){
    $(".container").fadeIn(1500);
    $(".next").delay(1000).fadeIn(1000);
})

$("button").click(function(){
    $(location).attr("href", "1-2-1.html");
});