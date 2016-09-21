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
    $("#border-blinker").css({border: "5px solid blue"});	
    borderIsBlue = true;
  }	
}, 1000)

var textIsBlue = false
setInterval(function() {
  if (textIsBlue) {
    $("#text-blinker").css({text: "white"});
    textIsBlue = false;
  } else {		
    $("#text-blinker").css({text: "blue"});	
    textIsBlue = true;
  }	
}, 100)
