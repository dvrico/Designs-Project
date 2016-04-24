$(function() {
  var FADE_OUT_TIME = 700             // ms
  var $carouselOne = $('.one');
  var $carouselTwo = $('.two');
  var $carouselThree = $('.three');
  var $carouselFour = $('.four');
  var $arrow = $('#carousel-arrow');

  var carousel = [$carouselOne,
                  $carouselTwo,
                  $carouselThree,
                  $carouselFour]

  $arrow.click(function() {

    carousel[0].addClass('animated fadeOutLeft');
    setTimeout(function() {
      carousel[0].hide()
      carousel[1].show()
      cleanClasses(carousel[1])      // For when the image comes around a second time.
      carousel[1].addClass('animated fadeInRight');
      rotate(carousel);

    }, FADE_OUT_TIME);

  });

  function rotate(array) {
    var firstItem = array.shift();
    array.push(firstItem);
  }

  function cleanClasses(el) {
    el.removeClass('fadeOutLeft')
  }

});
