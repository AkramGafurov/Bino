$(document).ready(function() {
  $(".header__slider").slick({
    //speed: 1500,
    //autoplay: true
  });
  $(".case-study__slider").slick({});

  $(".nav__mobile-menu").click(function(e) {
    $(".nav__mobile-menu").toggleClass("nav__line-active");
    $(".menu").toggleClass("menu-active");
  });
});
