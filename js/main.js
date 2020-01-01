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
$("#b2").hover(function () {
	$(this).addClass("hoverLink");
    $('#modal2').modal({
        show: true,
        backdrop: false
    })
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