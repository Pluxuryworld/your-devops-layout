const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

new Accordion('.accordion-container');
