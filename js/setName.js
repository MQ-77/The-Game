$(document).ready(function(){
    $(".container").fadeIn(1500);
})

$("#ok").click(function(){
    var _name = $("#name").val();
    window.sessionStorage.setItem("name", _name);
    window.location.href = "setRelationship.html";
})