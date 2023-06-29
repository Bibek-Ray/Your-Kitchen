$(document).ready(function(){
    if ($('body').width() <= 536) {
        $(".hamburger").removeClass("invisible");
        $(".hamburger").addClass("col-1");
        $(".hamburger").addClass("offset-2");
      }      
    else{
        $(".hamburger").addClass("invisible");
        $(".nav").removeClass("collapse");
    }
    function handleOrientationChange(mql) {
        if (mql.matches) {
          // Code to execute when the orientation changes to portrait
          $(".hamburger").removeClass("invisible");
          $(".nav").addClass("collapse");
        } else {
          // Code to execute when the orientation changes to landscape
          $(".hamburger").addClass("invisible");
          $(".nav").removeClass("collapse");
        }
      }
      
      // Check for orientation changes initially
      handleOrientationChange(window.matchMedia("(orientation: portrait)"));
      
      // Add event listener for orientation changes
      window.matchMedia("(orientation: portrait)").addListener(handleOrientationChange);
      
});