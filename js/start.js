$(document).ready(function(){
    $("button").hide().fadeIn(1500);
})

$("button").click(function(){
    $(location).attr("href", "makeSet.html");
});