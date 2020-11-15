window.onload = init;

// onload function
function init() {
  var showcase = document.getElementById("showcase_picture");

  var nextSlide = document.getElementById("next_button");
  var previousSlide = document.getElementById("previous_button");

  var windowSize = window.innerWidth;

  //putting the mobile images in an array for the showcase
  var mobileImages = ["images/mobile_showcase_1.png",
    "images/mobile_showcase_2.png",
    "images/mobile_showcase_3.png",
    "images/mobile_showcase_4.png"];
    
    //putting the desktop images in an array for the showcase
  var desktopImages = ["images/showcase_1.png",
    "images/showcase_2.png",
    "images/showcase_3.png",
    "images/showcase_4.png"];

  var showcasePosition = 0;

  window.addEventListener("resize", resizeImage);
  resizeImage();

  //
  nextSlide.onclick = function(){
    var windowSize = window.innerWidth;

    if(windowSize < 768){ // if mobile
      if(showcasePosition == mobileImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];
    } else if(windowSize < 1024) { // if tablet
      if(showcasePosition == mobileImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];
    } else { // else desktop
      if(showcasePosition == desktopImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = desktopImages[showcasePosition];
    }
  }

  previousSlide.onclick = function(){
    var windowSize = window.innerWidth;
    if(windowSize < 768){ // if mobile
      if(showcasePosition == 0)
      {
        showcasePosition = mobileImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];
    } else if(windowSize < 1024) { // if tablet
      if(showcasePosition == 0)
      {
        showcasePosition = mobileImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];
    } else { // else desktop
      if(showcasePosition == 0)
      {
        showcasePosition = desktopImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = desktopImages[showcasePosition];
    }
  }

  //reize the showcase image when the screen is resized
  function resizeImage(){
    var windowSize = window.innerWidth; //get width
    if(windowSize < 768){// if mobile
      showcase.src = mobileImages[showcasePosition];
    } else if(windowSize < 1024) {// if tablet
      showcase.src = mobileImages[showcasePosition];
    } else { // else desktop
      showcase.src = desktopImages[showcasePosition];
    }
  }
}
