jQuery(function () {

        new Skroll()
                .add(".hardness__bg", {
                        animation: "fadeInRight",
                        delay: 600,
                        duration: 750
                })
                .add(".warranty__bg", {
                        animation: "fadeInRight",
                        delay: 900,
                        duration: 750
                })
                .add(".ultrasonic__bg", {
                        animation: "fadeInUp",
                        delay: 900,
                        duration: 750
                })
                .add(".security__bg", {
                        animation: "fadeInUp",
                        delay: 900,
                        duration: 750
                })
                .add(".measure__bg", {
                        animation: "fadeInLeft",
                        delay: 900,
                        duration: 750
                })
                .init();

        function bodyNoScroll() {
                let bodyBodymotionless = document.querySelector('body')
                bodyBodymotionless.classList.add("Bodymotionless")

        }
        function bodyYesScroll() {
                let bodyBodymotionless = document.querySelector('body')
                bodyBodymotionless.classList.remove("Bodymotionless")
        }
});
function bodyNoScroll() {
        let bodyBodymotionless = document.querySelector('body')
        bodyBodymotionless.classList.add("Bodymotionless")

}
function bodyYesScroll() {
        let bodyBodymotionless = document.querySelector('body')
        bodyBodymotionless.classList.remove("Bodymotionless")
}

var galleryThumbs = new Swiper(".gallery-thumbs", {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        spaceBetween: 14,
});
var galleryMain;
$('.gallery-main').each(function(){
        var slider=$(this);
        var galleryMain = new Swiper(slider[0], {
                // watchOverflow: true,
                // watchSlidesVisibility: true,
                // watchSlidesProgress: true,
                // preventInteractionOnTransition: true,
                slidesPerView: 1,
                navigation: {
                        nextEl: slider.find('.swiper-button-next')[0],
                        prevEl: slider.find('.swiper-button-prev')[0]
                },
                thumbs: {
                        swiper: galleryThumbs
                },
                pagination: {
                        el: slider.find('.swiper-pagination')[0],
                        type: 'bullets',
                        clickable: true
                }
                // breakpoints: {
                // 	// when window width is >= 480px
                // 	992: {
                // 		slidesPerView: 2.2,
                // 		spaceBetween: 30
                // 	},
                // }
        });
        galleryMain.controller.control =  galleryThumbs;
});


galleryThumbs.controller.control =  galleryMain;
// galleryMain.controller.control =  galleryThumbs;