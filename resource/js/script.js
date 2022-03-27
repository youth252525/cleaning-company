$(document).ready(function() {
    $('#team-members').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverpause:false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });
});
// -----CounterUp Js 
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000,
    });
});

// ------Work Section Js
$(window).on("load",function(){
    // init Isotope
    $('.isotope-container').isotope({
    // options
  });
  // filter items on button click
  $('#filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $(".isotope-container").isotope({ filter: filterValue });
  });
});
// ---------------------------------------
// -------------------Testimonial Section 
// ----------------------------------------
// ----------------Author Testimonial
$(document).ready(function(){
    $(".author-testimonial").owlCarousel({
        loop:true,
        autoplay:true,
        Timeout:2000,
        autoplayHoverpause:false,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });
});
// -----------------------Logo Testimonial
$(document).ready(function(){
    $(".logo-testimonial").owlCarousel({
        loop:true,
        autoplay:true,
        Timeout:2000,
        autoplayHoverpause:false,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            1000:{
                items:2
            }
        }

    });
});