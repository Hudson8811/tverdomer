var hardnessTesters;
$('.js-hardness-testers').each(function(){
	var slider=$(this)
	var hardnessTesters = new Swiper(slider[0], {
		spaceBetween: 12,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
    allowTouchMove: true,
		navigation: {
				nextEl: ".hardness-tester-next",
				prevEl: ".hardness-tester-prev"
		},
		breakpoints: {
		// when window width is >= 480px
		992: {
			spaceBetween: 30,
			allowTouchMove: false,
		},
		}
	});
})


var hardnessGallery;
$('.js-hardness-gallery').each(function(){
	var slider=$(this)
	var hardnessGallery = new Swiper(slider[0], {
		spaceBetween: 0,
    centeredSlides: true,
		slidesPerView: 1,
    loop: true,
    speed: 800,
		allowTouchMove: false,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
				el: slider.find('.swiper-pagination')[0],
        clickable: true,

		},
		breakpoints: {
			// when window width is >= 480px
			992: {
				allowTouchMove: true,
			},
			}
	});
})