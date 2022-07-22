$(".menu").click(function () {
  $(this).css("display", "none");
  $(".close").css("display", "block");
  $(".nav__container").css("display", "flex");
});
$(".close").click(function () {
  $(this).css("display", "none");
  $(".menu").css("display", "block");
  $(".nav__container").css("display", "none");
});
$(".dropdown-1").click(function () {
  $(".dropdown-content-1").css("display", "flex");
});
$(".dropdown-2").click(function () {
  $(".dropdown-content-2").css("display", "flex");
});
