	///tabs-news
	var tabNavs = document.querySelectorAll(".news__tab");
	var tabPanes = document.querySelectorAll(".news-pane");
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
	///tabs-news

//show-more
	jQuery(document).ready(function($){
		$('.myselect-class').select2();


		$(".news-show-more-mybtn1").click(function(e){
			$(".news__row1 >*:hidden").slice(0,3).slideDown();
			if ($(".news__row1 >*:hidden").length < 1) $(this).slideUp();
		})
		$(".news-show-more-mybtn2").click(function(e){
			$(".news__row2 >*:hidden").slice(0,3).slideDown();
			if ($(".news__row2 >*:hidden").length < 1) $(this).slideUp();
		})
		$(".news-show-more-mybtn3").click(function(e){
			$(".news__row3 >*:hidden").slice(0,3).slideDown();
			if ($(".news__row3 >*:hidden").length < 1) $(this).slideUp();
		})
		$(".news-show-more-mybtn4").click(function(e){
			$(".news__row4 >*:hidden").slice(0,3).slideDown();
			if ($(".news__row4 >*:hidden").length < 1) $(this).slideUp();
		})
	})


var Swiper = new Swiper(".new__slider .swiper", {
	slidesPerView: 1.2,
	watchOverflow: true,
	navigation: {
		nextEl: '.new-swiper-button-next',
		prevEl: '.new-swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		}
	}
});


if (typeof ymaps !== "undefined") {
	ymaps.ready(() => {
		initYmaps("hero-contacts__map", [55.57136017671344, 37.75413504365536]);
	});
}
function initYmaps(mapID, coord) {
	const map = new ymaps.Map(mapID, {
		center: coord,
		zoom: 16
	});
	const myPlacemark = new ymaps.Placemark(
		coord,
		{
			// hintContent: 'Подсказка при наведении на метку',
			// balloonContent: 'Текст при нажатии на метку'
		},
		{
			iconLayout: "default#image",
			iconImageHref: "",
			iconImageSize: [44, 56],
			iconImageOffset: [-22, -56]
		}
	);

	map.geoObjects.add(myPlacemark);

   map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('typeSelector'); // удаляем тип
   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
   map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
