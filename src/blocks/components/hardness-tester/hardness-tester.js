function initTabsSlider(){
    $('.js-hardness-testers:not(.swiper-initialized)').each(function(){
        let slider=$(this)
        let hardnessTesters = new Swiper(slider[0], {
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
}

function destroyTabsSlider(){
    $('.js-hardness-testers.swiper-initialized').each(function () {
        let slider = $(this);
        let swiperInstance = slider[0].swiper;
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
        }
    });
}


$(document).ready(function() {
    initTabsSlider();
});


$('.js-hardness-gallery').each(function(){
    let slider=$(this)
	let hardnessGallery = new Swiper(slider[0], {
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