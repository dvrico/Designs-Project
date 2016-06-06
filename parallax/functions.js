$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

// Parallax effect for title and bg
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  })

  $('.foreground-pines-left').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  })

  $('.foreground-pines-right').css({
    'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
  })

// Slide in effect for items in trip list
  if(wScroll > $('.trip-list').offset().top - ($(window).height() / 1.3)) {

    //For each <a> tag in trip list, add fade in class every 150ms
    // adding '* (i+1)' to 150ms allows items to fade in one after another.
    $('.trip-list a').each(function(i) {
      setTimeout(function() {
        $('.trip-list a').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    })

  }

// Animation for Testimonials

  if(wScroll > $('.testimonial-list').offset().top - $(window).height()) {

    //Some serious Maths
    var offset = Math.min(0, wScroll - $('.testimonial-list').offset().top + $(window).height() - 350);

    $('.first-post').css({'transform': 'translate('+ offset +'px, 0px'});
    $('.second-post').css({'transform': 'translate('+ Math.abs(offset) +'px, 0px)'});
    $('.third-post').css({'transform': 'translate('+ offset +'px, 0px)'});
    $('.fourth-post').css({'transform': 'translate('+ Math.abs(offset) +'px, 0px)'});

  }

  // Fade In for email banner
    if(wScroll > $('.email-banner').offset().top - $(window).height()) {
      var opacity = (wScroll - $('.email-banner').offset().top + 400) / (wScroll / 8);

      $('.bg-tint').css({'opacity': opacity});
    }

})
