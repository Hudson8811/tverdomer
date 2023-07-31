

var mainSlider;
$('.js-main__slider').each(function(){
	var slider=$(this)
	var mainSlider = new Swiper(slider[0], {
		spaceBetween: 16,
    centeredSlides: true,
		slidesPerView: 2.8,
		autoHeight: true,
		slideToClickedSlide: true,
    loop: false,
    speed: 800,
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
