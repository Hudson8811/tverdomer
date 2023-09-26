$('.js-infocenter').each(function(){
	let slider=$(this)
    let hardnessTesters = new Swiper(slider[0], {
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
var fabrication;
$('.js-fabrication').each(function(){
	var slider=$(this)
	var fabrication = new Swiper(slider[0], {
		spaceBetween: 17,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
		navigation: {
				nextEl: ".fabrication-next",
				prevEl: ".fabrication-prev"
		},
		breakpoints: {
			// when window width is >= 480px
			992: {
				spaceBetween: 30,
			},
			}
	});
})



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
    });
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

function initPreviewSliders(){
    $('.js-hardness-gallery:not(.swiper-initialized)').each(function(){
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
}


$(document).ready(function() {
    initTabsSlider();
    initPreviewSliders();
});
var cardGallery;
$('.js-card-gallery').each(function(){
	var slider=$(this)
	var cardGallery = new Swiper(slider[0], {
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