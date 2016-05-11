// CARACTERS - SLIDER

$(document).ready(function(){
	$('.characters-slider_content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});

	$('.characters-slider a').on('click', function(event) {
		event.preventDefault();
		var charId = $(this).data('character');
		$('.characters-slider').fadeOut();
		$('#' + charId).fadeIn();
	});

	$('.character-view a.close-btn').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.character-view').slideUp();
		$('.characters-slider').slideDown();
	});

});

