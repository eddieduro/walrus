$(function() {


  $(".js-div").mouseenter(function() {
    $("#1>h3").fadeOut(1000)
  });
  $(".js-div").mouseleave(function() {
    $("#1>h3").fadeIn(3000);
  });


  $(".js-div").mouseenter(function() {
    $("#1>h4").fadeIn(6000).animate({opacity: 1}, 5000);
  });
  $(".js-div").mouseleave(function() {
    $("#1>h4").fadeOut(100).animate({opacity: 0}, 10);
  });




});
