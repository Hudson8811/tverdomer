var hardnessTesters;
$('.js-infocenter').each(function(){
	var slider=$(this)
	var hardnessTesters = new Swiper(slider[0], {
		spaceBetween: 30,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
		navigation: {
				nextEl: ".infocenter-next",
				prevEl: ".infocenter-prev"
		},
	});
})