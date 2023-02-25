$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu').toggleClass('active');
	});

	$('.team').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		responsive: [
			{
     			 breakpoint: 900,
     			 settings: {
        			slidesToShow: 2,
      			}
    		},
		]
	});

	$('.slider__body').slick({
		arrows: false,
		dots: true,
	});

	const tabBtns = document.querySelectorAll('.tabs-btns__link');
	const tabItems = document.querySelectorAll('.tabs-items__item');
	
	tabBtns.forEach(function(item) {
		item.addEventListener('click', function() {
			tabBtns.forEach(function(item) {
				item.classList.remove('active');
			});
			item.classList.add('active');
			let tabId = item.getAttribute('data-tab');
			let idItems = document.querySelector(tabId);
			tabItems.forEach(function(item) {
				item.classList.remove('active');
			});
			idItems.classList.add('active');
		});
	});

	$(function headerfunc() {
		let header = $("#header");
		let background = $("#background");
		let backgroundH = background.innerHeight() - 10;
		let scrollPos = $(window).scrollTop();

		checkscroll(scrollPos, backgroundH);

		$(window).on("scroll resize", function(){
			let scrollPos = $(window).scrollTop();
			let backgroundH = background.innerHeight() - 10;

			checkscroll(scrollPos, backgroundH);
		});

		function checkscroll(scrollPos, backgroundH) {
			if (scrollPos > backgroundH) {
			header.addClass('fixed');
			} else {
			header.removeClass('fixed');
			}
		}
	});

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffSet = $(elementId).offset().top - 5;

		$("html, body").animate({
			scrollTop: elementOffSet
		}, 800);
	});
});