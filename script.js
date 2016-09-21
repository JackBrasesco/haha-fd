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
    $("#border-blinker").css({border: "5px dotted white"});
    borderIsBlue = false;
  } else {		
    $("#border-blinker").css({border: "5px dotted blue"});	
    borderIsBlue = true;
  }	
}, 1000)

var textIsBlue = false
setInterval(function() {
  if (textIsBlue) {
    $("#text-blinker").css({text: "fade-out"});
    textIsBlue = false;
  } else {		
    $("#text-blinker").css({text: "white"});	
    textIsBlue = true;
  }	
}, 100)

console.log(textIsBlue)