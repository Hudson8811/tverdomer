	///tabs
	var tabNavs = document.querySelectorAll(".products__tab");
	var tabPanes = document.querySelectorAll(".products-pane");
  if(tabNavs !==null & tabPanes !==null) {
		tabClick() 
	}
	function tabClick() {
		for (var i = 0; i < tabNavs.length; i++) {

			tabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavs.length; j++) {
					var contentAttr = tabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavs[j].classList.add("active");
						tabPanes[j].classList.add("active"); 
					} else {
						tabNavs[j].classList.remove("active");
						tabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
	///tabs

var hardnessTesters;
$('.js-hardness-testers').each(function(){
	var slider=$(this)
	var hardnessTesters = new Swiper(slider[0], {
		spaceBetween: 30,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
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