window.onload = init;

function init() {
  var showcase = document.getElementById("showcase_picture");

  var nextSlide = document.getElementById("next_button");
  var previousSlide = document.getElementById("previous_button");

  var windowSize = window.innerWidth;

  if(windowSize < 768){
    showcase.src = "images/mobile_showcase_1.png";
  } else if(windowSize < 1024) {
    showcase.src = "images/mobile_showcase_1.png";
  } else {
    showcase.src = "images/showcase_1.png";
  }

  nextSlide.onclick = function(){
    showcase.src = "images/showcase_1.png";
  }

  previousSlide.onclick = function(){
    showcase.src = "images/showcase_2.png";
  }
}
