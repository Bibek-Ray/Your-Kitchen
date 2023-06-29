$(document).ready(function() {
    $(window).scroll(function() {
      // Loop through each section
      $('.section').each(function() {
        // Get the position of the current section
        var sectionOffset = $(this).offset().top;
  
        // Calculate the distance between the section and the top of the window
        var distanceFromTop = sectionOffset - $(window).scrollTop();
  
        // Check if the section is in view
        if (distanceFromTop < $(window).height() - 100) {
          // Add the CSS class to animate the section
          $(this).addClass('section-visible');
        } else {
          // Remove the CSS class if the section is not in view
          $(this).removeClass('section-visible');
        }
      });

      $('.testimonial').each(function() {
        // Get the position of the current section
        var sectionOffset = $(this).offset().top;

        // Calculate the distance between the section and the top of the window
        var distanceFromTop = sectionOffset - $(window).scrollTop();
  
        // Check if the section is in view
        if (distanceFromTop < $(window).height() - 100) {
          // Add the CSS class to animate the section
          $(this).addClass('fade-in-image');
        }
      });
    });
});

// Wait for the window to load
window.addEventListener('load', function() {
  // Simulate a loading delay (adjust the time as needed)
  setTimeout(function() {
    // Fade out the preloader
    document.getElementById('preloader').style.opacity = '0';
    // Delay the removal of the preloader to match the fade-out duration
    setTimeout(function() {
      document.getElementById('preloader').remove();
    }, 500); // Adjust the time to match the fade-out duration
  }, 500); // Adjust the time to simulate the loading delay

});
