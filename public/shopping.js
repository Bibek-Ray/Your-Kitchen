window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
      element.classList.add('visible');
    });
  });
  $(document).ready(function () {
    $('#filterCollapse').on('shown.bs.collapse', function () {
        // Code to execute when the collapse transition is complete and the collapse is fully shown
        // Here you can check if the collapse has the "show" class
        if($('#filterCollapse').hasClass('show')){
            $('.minimizer').removeClass('col-lg-1');
            $('.minimizer').addClass('col-lg-2');

            $('.minimizer-down').removeClass('col-lg-11');
            $('.minimizer-down').addClass('col-lg-9');
        }
      });
      
      $('#filterCollapse').on('hidden.bs.collapse', function () {
        // Code to execute when the collapse transition is complete and the collapse is fully hidden
        // Here you can check if the collapse does not have the "show" class
        if(!$('#filterCollapse').hasClass('show')){
        $('.minimizer').removeClass('col-lg-2');
        $('.minimizer').addClass('col-lg-1');

        $('.minimizer-down').removeClass('col-lg-9');
        $('.minimizer-down').addClass('col-lg-11');
    }
      });    
      $('.filter-elements').on('shown.bs.collapse', function() {
        if (!$('.sign1').hasClass('collapsed')) {
            $('.sign1').find('i').removeClass('bi-plus-circle').addClass('bi-dash-circle');
          }
        if (!$('.sign2').hasClass('collapsed')) {
            $('.sign2').find('i').removeClass('bi-plus-circle').addClass('bi-dash-circle');
          }
        if (!$('.sign3').hasClass('collapsed')) {
            $('.sign3').find('i').removeClass('bi-plus-circle').addClass('bi-dash-circle');
          }
        if (!$('.sign4').hasClass('collapsed')) {
            $('.sign4').find('i').removeClass('bi-plus-circle').addClass('bi-dash-circle');
          }
      });
    
      $('.filter-elements').on('hidden.bs.collapse', function() {
        if ($('.sign1').hasClass('collapsed')) {
            $('.sign1').find('i').removeClass('bi-dash-circle').addClass('bi-plus-circle');
          }
        if ($('.sign2').hasClass('collapsed')) {
            $('.sign2').find('i').removeClass('bi-dash-circle').addClass('bi-plus-circle');
          }
        if ($('.sign3').hasClass('collapsed')) {
            $('.sign3').find('i').removeClass('bi-dash-circle').addClass('bi-plus-circle');
          }
        if ($('.sign4').hasClass('collapsed')) {
            $('.sign4').find('i').removeClass('bi-dash-circle').addClass('bi-plus-circle');
          }
      });

      $('.rb1').click(function() {
        $('.scrollside1').animate({
          scrollLeft: "+=200px"
        }, "fast");
      });
      
       $('.lb1').click(function() {
        $('.scrollside1').animate({
          scrollLeft: "-=200px"
        }, "fast");
      });

      $('.rb2').click(function() {
        $('.scrollside2').animate({
          scrollLeft: "+=200px"
        }, "fast");
      });
      
       $('.lb2').click(function() {
        $('.scrollside2').animate({
          scrollLeft: "-=200px"
        }, "fast");
      });

      $('.rb3').click(function() {
        $('.scrollside3').animate({
          scrollLeft: "+=200px"
        }, "fast");
      });
      
       $('.lb3').click(function() {
        $('.scrollside3').animate({
          scrollLeft: "-=200px"
        }, "fast");
      });

      $('.rb4').click(function() {
        $('.scrollside4').animate({
          scrollLeft: "+=200px"
        }, "fast");
      });
      
       $('.lb4').click(function() {
        $('.scrollside4').animate({
          scrollLeft: "-=200px"
        }, "fast");
      });
      
      $('#filterCollapse').collapse('show');
  });