var fabrication;
$('.js-fabrication').each(function(){
	var slider=$(this)
	var fabrication = new Swiper(slider[0], {
		spaceBetween: 30,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
		navigation: {
				nextEl: ".fabrication-next",
				prevEl: ".fabrication-prev"
		},
	});
})


