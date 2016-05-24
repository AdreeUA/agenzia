import $ from 'jquery';
import 'owl.carousel';
import 'jquery.formstyler';
import 'lightbox2';
import 'jquery-colorbox';
import 'jquery-equalheights';

// КАРУСЕЛЬ
$(document).ready(function () {

	$('.team.owl-carousel').owlCarousel({
		items: 5,
		autoWidth: true,
		autoHeight: true,
		center: true,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 6000,
		responsive: {
			0: {
				items: 3
			},
			400: {
				items: 3
			},
			600: {
				items: 3
			},
			800: {
				items: 4
			},
			1024: {
				items: 5
			}
		}
	});

	$('.slider__list').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000
	});

	$('.creation.owl-carousel').owlCarousel({
		items: 3,
		margin: 5,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			600: {
				items: 2
			},
			800: {
				items: 2
			},
			1024: {
				items: 3
			}
		}
	});

	$('.quotations.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		center: true
	});

	$('.social-message.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		center: true
	});

	$('.post__list').owlCarousel({
		items: 1,
		dots: false,
		loop: false,
		nav: true,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			600: {
				items: 2
			},
			800: {
				items: 2
			},
			1024: {
				items: 3
			}
		}
	});

	// jQuery form
	(function ($) {
		$(function () {
			$('#color-product, #size-product, #number-product').styler({
				// selectSearch: true
			});
			$('.product-more__hidden, .rating__input').styler('destroy');
		});
	})(jQuery);

	$('.social__link_info').colorbox({
		maxWidth: '95%',
		maxHeight: '95%',
		rel: 'works'
	});
	let resizeTimer;

	function resizeColorBox() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function () {
			if ($('#cboxOverlay').is(':visible')) {
				$.colorbox.resize({
					width: '90%',
					height: '90%'
				});
			}
		}, 400);
	}

	// Resize Colorbox when resizing window or changing mobile device orientation
	$(window).resize(resizeColorBox);
	window.addEventListener('orientationchange', resizeColorBox, false);

	// Высота Wors__item
	function workHeight() {
		const workWidth = $('.works__item').width();
		$('.works__item').height(workWidth);
	};
	$(window).resize(workHeight);

});
