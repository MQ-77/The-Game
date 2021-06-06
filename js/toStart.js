$(document).ready(function(){
    var _name = window.sessionStorage.getItem("name");
    document.getElementById("gamesName").innerHTML = _name;
    $(".container").fadeIn(1500);
    $(".next").delay(1000).fadeIn(1000);
})

$("button").click(function(){
    $(location).attr("href", "firstday.html");
});