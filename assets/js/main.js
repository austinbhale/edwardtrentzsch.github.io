var isMobile = false;

$(function() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
  for (var i = 0; i <= 2; i++) {
    if (isMobile) {
      $("#parallax-mobile" + i).css("display", "block");
      $("#parallax-ctr" + i)
        .removeClass("parallax-container" + i)
        .addClass("noparallax-container");
      } else {
      $("#parallax" + i).css("display", "block");
    }
  }
});

var elementsValid = document.getElementsByClassName("valid");
var elementsInvalid = document.getElementsByClassName("invalid");
var valids = false;
var invalids = false;
var received = false;
$("#gform").on("submit", function(e) {
  elementsValid.length > 3 ? (valids = true) : (valids = false);
  elementsInvalid.length == 0 ? (invalids = true) : (invalids = false);

  if (valids && invalids) {
    $("#gform *").fadeOut(2000, function() {
      if (!received) {
        $("#gform").prepend("Thanks! I'll be in touch with you soon.");
        received = true;
      }
    });
  } else {
    alert("Please fill in all fields.");
  }
});
