$(document).ready(function() {
  setTimeout(function() {
    $(".meteor1").addClass("alarm");
    $(".meteor2").addClass("alarm");
    $(".meteor3").addClass("alarm");
    $(".meteor4").addClass("alarm");
    $(".meteor5").addClass("alarm");
    $(".meteor6").addClass("alarm");
    $(".meteor7").addClass("alarm");
    $(".meteor8").addClass("alarm");
    $(".meteor9").addClass("alarm");
    $(".meteor10").addClass("alarm");
    $(".meteor11").addClass("alarm");
    $(".meteor12").addClass("alarm");
    $(".meteor13").addClass("alarm");
    $(".meteor14").addClass("alarm");
    $(".meteor15").addClass("alarm");
    $(".meteor16").addClass("alarm");
    $(".button").addClass("alarm");
    $(".message").addClass("alarm");
    setInterval(function(){
        $(".meteor").toggleClass("alarm");
    } , 1000);
  }, 10000);
});