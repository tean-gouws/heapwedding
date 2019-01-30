'use strict';

/*====================================
Project:     Lovely Time
Author:      PotokProektov
Version:     1.0
Last change: none
Website:     http://abshar.by/lovely-time/
======================================*/

/*---------------------- 
  JS Guide
------------------------
 0. PRELOADER
 1. NAVIGATION
 2. SLIDER
 3. ANIMATION
 4. COUNTDOWN
 5. SCROLL TOP 
 6. FORM VALIDATE
 7. IMAGE POPUP
 8. SCROLL ANIMATE
 9. MAP
10. INSTAGRAM FEED
11. GALLERY WITH FILTERS
*/


// 0.PRELOADER
//================================================================

window.addEventListener('load', function(){
  $('#loader').fadeOut('300');
})



// 1.NAVIGATION
//================================================================

$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.navbar').addClass('navbar-theme-small');
    }
    else {
      $('.navbar').removeClass('navbar-theme-small');
    }
  });
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});

$(function(){ 
   var navMain = $("#landing-navbar-collapse");
   navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
   });
});


var  hdr = $(window).height() - 1;

var  hm  = $("nav.navbar");
$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    hm.addClass("header-menu-sticky");
  } else {
    hm.removeClass("header-menu-sticky");
  }
});



// 2.SLIDER
//================================================================

$("#main-slider").find('.owl-carousel').owlCarousel({
  loop:true,
  autoPlay: 7000,
  pagination:false,
  singleItem : true,
  navigation : true,
  navigationText: [
  "<i class='fa fa-angle-left'></i>",
  "<i class='fa fa-angle-right'></i>"
  ],
  transitionStyle : "fadeUp"  // fadeUp goDown backSlide
});


$("#gallery-slider").find('.owl-carousel').owlCarousel({
  loop:true,
  autoPlay: 7000,
  pagination:false,
  singleItem : true,
  navigation : true,
  navigationText: [
  "<i class='fa fa-angle-left'></i>",
  "<i class='fa fa-angle-right'></i>"
  ],
  transitionStyle : "fadeUp"  // fadeUp goDown backSlide
});


$("#gift-carousel").find('.owl-carousel').owlCarousel({
  loop:true,
  dots:true,
  animateOut: 'fadeOut',
  responsive:{
    0:{
      items:1
    },
    400:{
      items:1
    },
    600:{
      items:2
    },
    2200:{
      items:4
    }
  }
});



// 3.ANIMATION
//================================================================

(function($) {
  $.fn.animated = function(inEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "90%"
      });

    });
  };
})(jQuery);

$(".animatefadeInDown").animated("fadeInDown","fadeInDown");
$(".animatefadeInUp").animated("fadeInUp","fadeInUp");
$(".animatefadeIn").animated("fadeIn","fadeOut");
$(".animatezoomIn").animated("zoomIn","zoomIn");



// 4.COUNTDOWN
//================================================================

$('#getting-countdown').countdown('2019/04/06 15:00:00', function(event) {
  $(this).html(event.strftime('<div class="countdown-num"><span>%w</span><p>weeks</p></div><div class="countdown-num"><span>%d</span><p>days</p></div><div class="countdown-num"><span>%H</span><p>hours</p></div><div class="countdown-num"><span>%M</span><p>minuts</p></div><div class="countdown-num"><span>%S</span><p>seconds</p></div>'));
});



// 5. SCROLL TOP
//================================================================

$(window).scroll(function () {
  if ($(this).scrollTop() > 1200) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});

$(document).on('click', '.scrollup',  function(){
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});



// 6. FORM VALIDATE
//================================================================

$("input,textarea").jqBootstrapValidation(
{
  preventSubmit: true,
  submitError: function($form, event, errors) {
  },
  submitSuccess: function($form, event) {
    event.preventDefault();
     // get values from FORM
    var name    = $("#formName").val();  
    var email   = $("#formEmail").val(); 
    var phone   = $("#formPhone").val(); 
    var message = $("#formMessage").val();
         
    $.ajax({
      url: "./php/form.php",
      type: "POST",
      data: {name: name, phone: phone, email: email, message: message},
      cache: false,
      success: function() {
        $('#contact-form').prepend( "<p class='text-center'>Thank You! Your message has been sent.</p><br>" );             
        //clear all fields
        $('form#contact-form')[0].reset(); 
      },
     error: function() {
      $('form#contact-form')[0].reset(); 
      },
    })
  }
});
   


// 7. IMAGE POPUP
//================================================================

$(document).ready(function() {
  $(".img-popup-link").magnificPopup({
    type:"inline",
    mainClass: 'mfp-fade',
    removalDelay: 300,
    midClick: true
  });
});

$(".img-item").each(function(i) {
  $(this).find("a").attr("href", "#img_" + i);
  $(this).find(".img-popup-content").attr("id", "img_" + i);
});



// 8. SCROLL ANIMATE
//================================================================

function scrollToDiv(element,navheight){
  var offset = element.offset();
  var offsetTop = offset.top;
  var totalScroll = offsetTop-navheight;
  $('body, html').animate({scrollTop: totalScroll}, 1500);
}

$('.scroll-nav a').click(function(e) { 
  e.preventDefault(); 
  var el = $(this).attr('href');
  var elWrapped = $(el);
  scrollToDiv(elWrapped,0);    
});

$('.section').waypoint(function(direction) {
  var $active = $(this);
  if (direction === "up") {
    $active = $active.prev();
  }
  if (!$active.length) {
    $active.end();
  }
  var currentId = $active.attr('id');
  $('#menu a').removeClass('active');
  $('#menu a[href=#'+currentId+']').addClass('active');
  }, { offset: '30%' }
);

// 9. MAPS
//================================================================

jQuery(function($) {
  // Asynchronously Load the map API 
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
});

function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();

  var mapOptions = {
    scrollwheel: false,
    center: markers,
    zoom: 7,
    styles: [ {"featureType": "water", "elementType": "geometry", "stylers": [ {"color": "#e9e9e9"},{ "lightness": 17 }]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [ {"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative", "elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}]
  };
                  
  // Display a map on the page
  map = new google.maps.Map(document.getElementById("white-map"), mapOptions);
  map.setTilt(45);

  var d_image = 'images/dark-marker.png';
  var l_image = 'images/light-marker.png';
      
  // Multiple Markers
  var markers = [
      ['1. Reseption', 51.503454,-0.119562]
  ];
                      
  // Info Window Content
  var infoWindowContent = [
      ['<div class="info_content">' +
      '<h6>1. Reseption</h6>' +
      '<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus..</p>' +        '</div>'],
      ['<div class="info_content">' +
      '<h6>2. Ceremony location</h6>' +
      '<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h6>3. Gift registry</h6>' +
      '<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>' +        '</div>'],
      ['<div class="info_content">' +
      '<h6>4. Wedding party</h6>' +
      '<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>' +
      '</div>']
  ];
      
  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(), marker, i;
  
  // Loop through our array of markers & place each one on the map  
  for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: d_image
    });
    
    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));

    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      google.maps.event.removeListener(boundsListener);
  });
    
}

// 10. INSTAGRAM FEED
//================================================================

$('.il-instagram-feed').instagramLite({
  accessToken: '34626526.e03499d.ce25ff5470e246aab7e54dcb22c754c0',
  urls: true,
  limit: 6,
  success: function() {
    console.log('The request was successful!');
  },
  error: function() {
    console.log('There was an error with your request.');
  }
});

// 11. GALLERY WITH FILTERS
//================================================================

var contents = $('#gallery-filter');
var filter = $('.filter');
var mix = $('.mix');

filter.on('click', function(){
  var  th = $(this),
  matches = th.data('filter');
  if(matches == 'all'){
    mix.addClass( "hide" );
    setTimeout(function(){$( ".mix" ).removeClass( "hide" )},100);
    $( ".filter" ).removeClass( "active" );
    $( ".mix" ).addClass( "fade" );
    th.addClass( "active" )
  }else{
    mix.addClass( "hide" );
    setTimeout(function(){
      var matchesMix = contents.find('.'+ matches);
      matchesMix.removeClass('hide').addClass( "fade" );
    },100);

    $( ".filter" ).removeClass( "active" );
    th.addClass( "active" )
  }


});
