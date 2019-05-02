$(document).ready(function() {
  $(".gundamsmall").mouseenter(function() {
    $(".gundamsmall").addClass("show");
    $(".gundam").addClass("show");
  });

  $(".gundam").mouseleave(function() {
    $(".gundam").removeClass("show");
    $(".gundam").removeClass("show");

      $(".gundamzsmall").mouseenter(function() {
    $(".gundamzeta").addClass("show");
    $(".gundamzeta").addClass("show");

      $(".gundamzeta").mouseleave(function() {
    $(".gundamzeta").removeClass("show");
    $(".gundamzsmall").removeClass("show");

  });
});