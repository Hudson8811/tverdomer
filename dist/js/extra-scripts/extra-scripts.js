//show-more
	jQuery(document).ready(function($){
		$('.myselect-class').select2();


		
		$(".news-show-more-mybtn1").click(function(e){
			$(".news__row1 >*:hidden").slice(0,3).slideDown();
			if ($(".news__row1 >*:hidden").length < 1) $(this).slideUp();
		})
		
		
		
		$(".header-reviews-page").click(function(e){
			$(this).parent().toggleClass("js-active");
		})
	})


let SwiperSlider = new Swiper(".new__slider .swiper", {
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
