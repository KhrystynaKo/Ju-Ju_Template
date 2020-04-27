$(document).ready(function () {
  $(".header-nav__hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header-nav__link").toggleClass("active");
  });
});
