var hardnessTesters;
$('.js-hardness-testers').each(function(){
	var slider=$(this)
	var hardnessTesters = new Swiper(slider[0], {
		spaceBetween: 30,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
    allowTouchMove: false,
		navigation: {
				nextEl: ".hardness-tester-next",
				prevEl: ".hardness-tester-prev"
		},
	});
})


var hardnessGallery;
$('.js-hardness-gallery').each(function(){
	var slider=$(this)
	var hardnessGallery = new Swiper(slider[0], {
		spaceBetween: 0,
    centeredSlides: true,
		slidesPerView: 1,
    loop: false,
    speed: 800,
		navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
		},
		// thumbs: {
		// 		swiper: galleryThumbs
		// },
		pagination: {
				el: slider.find('.swiper-pagination')[0],
        clickable: true,

		}
		// breakpoints: {
		//     // when window width is >= 480px
		//     992: {
		//         slidesPerView: 2.2,
		//         spaceBetween: 30
		//     },
		// }
	});
})