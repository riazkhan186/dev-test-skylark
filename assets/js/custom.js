(function ($) {
  "use strict";
  // for sticky navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navbar-area").addClass("sticky");
    } else {
      $(".navbar-area").removeClass("sticky");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navbar-area .main-nav").addClass("sticky");
    } else {
      $(".navbar-area .main-nav").removeClass("sticky");
    }
  });

  // Banner Slider
  $(".banner-content").owlCarousel({
    items: 1,
    nav: true,
    navText: ['<iconify-icon icon="ic:round-arrow-back"></iconify-icon>','<iconify-icon icon="ic:round-arrow-forward"></iconify-icon>'],
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    thumbs: true,
    thumbsPrerendered: true,
  });

  // Calculate slide number and fix the number of thumbs
  let w = 0;
  $(".owl-thumbs button").each(function (i) {
    console.log(i + 1);
    let l = i + 1;
    w = 100 / l;
  });

  $(".owl-thumbs button").width((w-2)+"%");

})(jQuery);