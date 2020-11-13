window.onload = init;

function init() {
  var showcase = document.getElementById("showcase_picture");

  var nextButton = document.getElementById("next_button");
  var previousButton = document.getElementById("previous_button");

  nextButton.onclick = function(){
    showcase.src = "images/game_1.png";
  }

  previousButton.onclick = function(){
    showcase.src = "images/game_2.png";
  }
}
