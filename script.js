var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)

var borderIsBlue = false
setInterval(function() {
  if (borderIsBlue) {
    $("#border-blinker").css({border: "white"});
    borderIsBlue = false;
  } else {		
    $("#border-blinker").css({border: "blue"});	
    borderIsBlue = true;
  }	
}, 100)
