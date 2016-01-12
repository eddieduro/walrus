$(function() {


  $(".js-div").mouseenter(function() {
    $(this).find("h3").fadeOut(1000);
  });

  //Cool Hover Effects!!! *Jealous*
  
  $(".js-div").mouseleave(function() {
    $(this).find("h3").fadeIn(3000);
  });


  $(".js-div").mouseenter(function() {
    $(this).find("h4").fadeIn(3000).animate({opacity: 1}, 1000);
  });
  $(".js-div").mouseleave(function() {
    $(this).find("h4").fadeOut(1000).animate({opacity: 0}, 1000);
  });




});
