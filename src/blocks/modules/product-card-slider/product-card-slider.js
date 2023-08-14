var galleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
  spaceBetween: 14,
  navigation: {
          nextEl: ".gallery-thumbs-next",
          prevEl: ".gallery-thumbs-prev"
  },
  
});

var galleryMain = new Swiper(".gallery-main",  {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  slidesPerView: 1,

  thumbs: {
          swiper: galleryThumbs
  },
  // breakpoints: {
  // 	// when window width is >= 480px
  // 	992: {
  // 		slidesPerView: 2.2,
  // 		spaceBetween: 30
  // 	},
  // }
});

// galleryThumbs.controller.control =  galleryMain;
galleryMain.controller.control =  galleryThumbs;