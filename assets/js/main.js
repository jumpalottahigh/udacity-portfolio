$(document).ready(function() {
  $('.crystalize').hover(function() {
    $(this).attr("src", "assets/img/coding-background.PNG");
  }, function () {
    $(this).attr("src", "assets/img/coding-background-blurred.PNG");
  });
});
