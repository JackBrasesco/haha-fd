var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 1)

var borderIsBlue = false
setInterval(function() {
  if (borderIsBlue) {
    $("#border-blinker").css({border: "5px solid white"});
    borderIsBlue = false;
  } else {		
    $("#border-blinker").css({border: "5px solid yellow"});	
    borderIsBlue = true;
  }	
}, 1000000)

var textIsBlue = false
setInterval(function() {
  if (textIsBlue) {
    $("#text-blinker").css({text: "white"});
    textIsBlue = false;
  } else {		
    $("#text-blinker").css({text: "red"});	
    textIsBlue = true;
  }	
}, 100)
