$(document).ready(function() {
  $(".header__slider").slick({
    speed: 1500,
    autoplay: true
  });

  $(window).on("load resize", function() {
    var width = $(document).width();

    if (width > 1024) {
      $(".stats__slider").slick("unslick");
    } else {
      $(".stats__slider")
        .not(".slick-initialized")
        .slick({
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          autoplay: true,
          responsive: [
            {
              breakpoint: 670,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                speed: 1000,
                autoplay: true
              }
            },
            {
              breakpoint: 414,
              settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 1000,
                autoplay: true
              }
            }
          ]
        });
    }
  });
  //.pricing__slider
  $(window).on("load resize", function() {
    var width = $(document).width();

    if (width > 768) {
      $(".pricing__slider").slick("unslick");
    } else {
      $(".pricing__slider")
        .not(".slick-initialized")
        .slick({
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          responsive: [
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 1000
              }
            },
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 1000
              }
            }
          ]
        });
    }
  });

  $(".case-study__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1000
    //autoplay: true
  });

  $(".nav__mobile-menu").click(function(e) {
    $(".nav__mobile-menu").toggleClass("nav__line-active");
    $(".menu").toggleClass("menu-active");
  });
});
