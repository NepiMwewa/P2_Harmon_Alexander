window.onload = init;

function init() {
  var showcase = document.getElementById("showcase_picture");

  var nextSlide = document.getElementById("next_button");
  var previousSlide = document.getElementById("previous_button");


  nextSlide.onclick = function(){
    showcase.src = "images/showcase_1.png";
  }

  previousSlide.onclick = function(){
    showcase.src = "images/mobile_showcase_1.png";
  }
}
