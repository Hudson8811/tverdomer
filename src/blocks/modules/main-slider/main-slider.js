

var mainSlider;
$('.js-main__slider').each(function(){
	var slider=$(this)
	var mainSlider = new Swiper(slider[0], {
		spaceBetween: 30,
    centeredSlides: true,
		slidesPerView: 1,
		autoHeight: true,
		slideToClickedSlide: false,
    loop: false,
    speed: 1500,
		allowTouchMove: true,
		navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
		},
		// mousewheel: {
		// 	sensitivity: 1,
		// },
		// thumbs: {
		// 		swiper: galleryThumbs
		// },
		pagination: {
				el: slider.find('.swiper-pagination')[0],
        clickable: true,
        renderBullet: function (index, className) {
					if(index <= 8) {
						return '<span class="' + className + '">' + '0'+(index + 1) + "</span>";
					}
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
		},
		breakpoints: {
		    767: {
		        slidesPerView: 2.8,
		        spaceBetween: 16,
						slideToClickedSlide: true,
						allowTouchMove: false,
		    },
		}
	});
})
