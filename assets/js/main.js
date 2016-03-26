$(document).ready(function() {
  $('.crystalize').hover(function() {
    $(this).attr("src", "assets/img/coding-background.png");
  }, function () {
    $(this).attr("src", "assets/img/coding-background-blurred.png");
  });
});
