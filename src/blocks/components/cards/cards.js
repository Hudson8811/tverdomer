function initPreviewSliders2(){
    $('.js-card-gallery').each(function(){
        var slider=$(this)
        let cardGallery = new Swiper(slider[0], {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 1,
            loop: false,
            speed: 800,
            navigation: {
                nextEl: slider.find('.swiper-button-next')[0],
                prevEl: slider.find('.swiper-button-prev')[0]
            },
            pagination: {
                el: slider.find('.swiper-pagination')[0],
                clickable: true,

            }
        });
    })
}

$(document).ready(function() {
    initPreviewSliders2();
});