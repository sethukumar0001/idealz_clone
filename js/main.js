'use strict';

var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach((elm) => {
	elm.addEventListener('click', () => {
		elm.previousElementSibling.value = '';
	});
});

// -----register form-----
/* Creator of this Jquery https://codepen.io/cssjockey/pen/jGzuK */
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
})
// -------------login modal----------------
$("#b2").click(function () {
	$(this).addClass("hoverLink");
    $('#modal2').modal({
        show: true,
        backdrop: false
    })
});
$(window).on('load resize',function() {
	if ($(this).width() < 769) {
		$('.loginbar a').attr("href");
		$('.loginbar a').removeAttr("data-toggle", "data-target");
	} else {
		$('.loginbar a').attr("data-toggle", "data-target");
		$('.loginbar a').removeAttr("href");

	}
	});
// -------------navbar--------
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
	  $(".navbar-fixed-top").removeClass("top-nav-collapse");
	} else {
	  $(".navbar-fixed-top").addClass("top-nav-collapse");
	}
  }); $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      }
	});
	
	// -----product slider ---------
	// jQuery(document).ready(function($) {
	// 	$('.product-items-slider').owlCarousel({
	// 	loop:false,
	// 	items: 3,
	// 	nav: true,
	// 	navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
	// 	stagePadding: 5,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		600:{
	// 			items:2
	// 		},
	// 		1000:{
	// 			items:3
	// 		}
	// 	}
	// })