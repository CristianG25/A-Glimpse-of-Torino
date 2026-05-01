/*-----------------------------------------------------------------------------------

  Template Name: Pharaoh  Historical HTML Template.
  Template URI: #
  Description: Pharaoh is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: DevItems
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Portfolio  Masonry (width)
  04. Portfolio  Masonry 2 (width)
  05. Portfolio  Masonry 3 (width)
  06. Sticky Header
  07. ScrollUp
  08. Slider Img Activation
  09. Testimonial Slick Carousel
  10. Testimonial Image Slider As Nav
  11. Testimonial Image Slider 2
  12. Upcoming Carousel Active
  13. CounterUp
  14. Magnific Popup
  15. Animate Text Style
  16. Animate Menu Style
  17. YTPlayer


/*--------------------------------
[ End table content ]
-----------------------------------*/


(function($) {
    'use strict';

/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu-area',
      meanScreenWidth: "767",
      meanRevealPosition: "right",
    });


/*-------------------------------------------
  02. wow js active
--------------------------------------------- */
    new WOW().init();


/*-------------------------------------------
  03. Portfolio  Masonry (width)
--------------------------------------------- */

  $('.portfolio__area').imagesLoaded( function() {
    var PAGE_SIZE = 8;
    var currentLimit = PAGE_SIZE;
    var activeFilter = '*';
    var total = $('.portfolio__wrap .pro__item').length;

    $('[data-filter="*"]').text('View All (' + total + ')');

    function getFilter() {
      if (activeFilter !== '*') return activeFilter;
      return function() {
        return parseInt($(this).data('seq'), 10) <= currentLimit;
      };
    }

    var $grid = $('.portfolio__wrap').isotope({
      itemSelector: '.pro__item',
      percentPosition: true,
      transitionDuration: '0.7s',
      layoutMode: 'fitRows',
      filter: getFilter()
    });

    function updateViewMore() {
      if (activeFilter !== '*' || currentLimit >= total) {
        $('#gallery-view-more').hide();
      } else {
        $('#gallery-view-more a').text('View ' + (total - currentLimit) + ' more');
        $('#gallery-view-more').show();
      }
    }

    $('.portfolio__menu').on('click', 'button', function() {
      activeFilter = $(this).attr('data-filter');
      currentLimit = PAGE_SIZE;
      $('.portfolio__menu button').removeClass('is-checked');
      $(this).addClass('is-checked');
      $grid.isotope({ filter: getFilter() });
      updateViewMore();
    });

    $('#gallery-view-more a').on('click', function(e) {
      e.preventDefault();
      currentLimit = Math.min(currentLimit + PAGE_SIZE, total);
      $grid.isotope({ filter: getFilter() });
      // Give newly visible items one frame to paint, then re-run layout
      setTimeout(function() { $grid.isotope('layout'); }, 100);
      updateViewMore();
    });

    updateViewMore();
  });


/*-------------------------------------------
  06. Sticky Header
--------------------------------------------- */ 

  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $("#sticky-header-with-topbar").removeClass("scroll-header");
     }else{
      $("#sticky-header-with-topbar").addClass("scroll-header");
     }
    });

/*--------------------------------------
  07. ScrollUp
---------------------------- --------*/
  $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });

/*-----------------------------------------------
  08. Slider Img Activation
-------------------------------------------------*/


  $(".slider__img--activation").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      autoplay: true,
      autoplayTimeout: 200,
      items:1,
      dots: false,
      navText:false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1400:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });

/*----------------------------------------
  09. Testimonial Slick Carousel
--------------------------------------------*/
  $('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.testimonial-image-slider',
    responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,  
            centerPadding: '0px',
            }
        },
        {
          breakpoint: 320,
          settings: {
            autoplay: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            focusOnSelect: false,
            }
        }
        ]
    });
/*---------------------------------------------------
  10. Testimonial Image Slider As Nav
---------------------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        swipeToSlide: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-double-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-double-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,  
                centerPadding: '10px',
                }
            },
            {
              breakpoint: 320,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                }
            }
        ]


    });

/*----------------------------------------------
  11. Testimonial Image Slider 2
---------------------------------------------------*/
    $('.testimonial-image-slider--2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider--2',
        dots: false,
        nav:true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,  
                centerPadding: '10px',
                }
            },
            {
              breakpoint: 320,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                }
            }
        ]
    });


    $('.testimonial-text-slider--2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider--2',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,  
                centerPadding: '10px',
                }
            },
            {
              breakpoint: 320,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                }
            }
        ]
    });

/*-------------------------------------------------
  12. Upcoming Carousel Active
----------------------------------------------------*/

  $(".indicator__style--1").owlCarousel({
      loop:true,
      margin:0,
      nav: true,
      autoplay: true,
      navText: [ '<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>' ],
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          nav: false,
        },
        1200:{
          nav: true,
        }
      }
    });




/*-----------------------------
  13. CounterUp
-----------------------------*/
  $('.count').counterUp({
    delay: 60,
    time: 3000
  });

/*--------------------------------
  14. Magnific Popup
----------------------------------*/

  $('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      zoom: {
          enabled: true,
      }
  });
     
  $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery:{
            enabled:true, 
        }
    });


/*--------------------------------
  15. Animate Text Style
----------------------------------*/


  $('.animate_text_style').textillate({
    loop: true,
  });


/*--------------------------------
  16. Animate Menu Style
----------------------------------*/


$('.menu__icon').on('click', function(){

$('.main__menu__nav').toggleClass('show-menu');


if ( $('.menu__icon').find("i").hasClass('click-menu-open')){
  $('.menu__icon').find("i").removeClass('click-menu-open').addClass('click-menu-close');
}else{
  $('.menu__icon').find("i").removeClass('click-menu-close').addClass('click-menu-open');
}

});


/*--------------------------------
  17. YTPlayer
----------------------------------*/

$("#ytplayer").YTPlayer();
$("#ytplayer").on("YTPReady", function() {
  $(this).YTPPlay();
});




})(jQuery);




