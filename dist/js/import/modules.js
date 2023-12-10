

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


$( ".header__menu__item" ).mouseenter(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.addClass('active')
});
$( ".header__menu__item" ).mouseleave(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.removeClass('active')
});


let overlayBg = document.querySelector(".mob-menu--overlay");
let mobMenu = document.querySelector(".mob-menu__section");
let humb = document.querySelector(".hamburger");

var hamburger = $(".hamburger");
hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
});
var search = $(".header__other__search");
search.click( function(e) {
  $(this).children(".header__other__search__input").addClass("active"); 

});
$(document).mouseup(function (e){ 
  var search = $(".header__other__search");
  if (!search.is(e.target) 
      && search.has(e.target).length === 0) { 
        search.children(".header__other__search__input").removeClass("active"); 
  }
});

overlayBg.addEventListener("click", function () {
  mobMenu.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll()
});
humb.addEventListener("click", function () {
  let kye = mobMenu.classList.contains("active");
  if (kye == false) {
    mobMenu.classList.add("active");
    bodyNoScroll()
  }else {
    mobMenu.classList.remove("active");
    bodyYesScroll()
  }
});










// var galleryThumbs = new Swiper(".gallery-thumbs", {
//   centeredSlides: true,
//   centeredSlidesBounds: true,
//   slidesPerView: 3,
//   watchOverflow: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   direction: 'horizontal',
//   spaceBetween: 10,
//   navigation: {
//           nextEl: ".gallery-thumbs-next",
//           prevEl: ".gallery-thumbs-prev"
//   },
//     breakpoints: {
//   	// when window width is >= 480px
//   	992: {
//   		direction: 'vertical',
//       spaceBetween: 14,
//   	},
//   }
  
// });

// var galleryMain = new Swiper(".gallery-main",  {
//   watchOverflow: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   preventInteractionOnTransition: true,
//   slidesPerView: 1,

//   thumbs: {
//           swiper: galleryThumbs
//   },
//   navigation: {
//     nextEl: ".gallery-main-next",
//     prevEl: ".gallery-main-prev"
// },
//   // breakpoints: {
//   // 	// when window width is >= 480px
//   // 	992: {
//   // 		slidesPerView: 2.2,
//   // 		spaceBetween: 30
//   // 	},
//   // }
// });

// // galleryThumbs.controller.control =  galleryMain;
// galleryMain.controller.control =  galleryThumbs;



$('.product-card__slider').each(function () {
  var galleryThumbs;
  var galleryMain;
  var group = $(this);
  group.find('.gallery-thumbs').each(function () {
      var slider = $(this)
      galleryThumbs = new Swiper(slider[0], {
          centeredSlides: true,
          centeredSlidesBounds: true,
          slidesPerView: 3,
          watchOverflow: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          direction: 'horizontal',
          spaceBetween: 10,
          navigation: {
              nextEl: ".gallery-thumbs-next",
              prevEl: ".gallery-thumbs-prev"
          },
          breakpoints: {
              // when window width is >= 480px
              992: {
                  direction: 'vertical',
                  spaceBetween: 14,
              },
          }
      })
  });

  group.find('.gallery-main').each(function () {
      var slider = $(this)
      galleryMain = new Swiper(slider[0], {
          watchOverflow: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          preventInteractionOnTransition: true,
          slidesPerView: 1,

          thumbs: {
              swiper: galleryThumbs
          },
          navigation: {
              nextEl: ".gallery-main-next",
              prevEl: ".gallery-main-prev"
          },
          // breakpoints: {
          //     // when window width is >= 480px
          //     992: {
          //         slidesPerView: 2.2,
          //         spaceBetween: 30
          //     },
          // }
      })
      // galleryMain.controller.control = galleryThumbs;
  });

  // // galleryThumbs.controller.control = galleryMain;
  galleryMain.controller.control = galleryThumbs;
});

// $(".main__pagination__item").click(function(event){     
//     event.preventDefault();
//     console.log(this)
//     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
// });

// $(document).ready(function () {
// 	$(function () {
// 			$('.main__pagination__item').click(function (e) {
// 					$('.main__pagination__item').removeClass('active');
// 					$(this).addClass('active');
// 			});
// 	});
// });
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.main__pagination__item');
  let fromTop = window.scrollY + 72;
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


$(window).on('load',function (){
    let containerSocGray  = document.querySelector(".js-container__soc-gray ")
    if(containerSocGray !== null) {
        if(document.documentElement.clientWidth > 992) {
            var sidebar2 = new StickySidebar('#soc--gray', {
                containerSelector: '.js-container__soc-gray',
                innerWrapperSelector: '.sidebar__inner',
                topSpacing: 80+236,
                resizeSensor: false,
                bottomSpacing: 0
            });
        } else {
            var sidebar2 = null;
        }

    }

});


