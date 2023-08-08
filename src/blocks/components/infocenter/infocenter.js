var hardnessTesters;
$('.js-infocenter').each(function(){
	var slider=$(this)
	var hardnessTesters = new Swiper(slider[0], {
		spaceBetween: 12,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
		navigation: {
				nextEl: ".infocenter-next",
				prevEl: ".infocenter-prev"
		},
		breakpoints: {
			// when window width is >= 480px
			992: {
				spaceBetween: 30,
			},
			}
	});
})