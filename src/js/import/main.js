

jQuery(function () {

	new Skroll()
		.add(".hardness__bg", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".warranty__bg", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".ultrasonic__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".security__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".measure__bg", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.init();
	new Skroll()
		.add(".portable__picture", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".portable__col__one", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".sonic-sensor__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".dynamic-sensor__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".electronic-unit__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".equipment__bg", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".equipment-two__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.add(".contacts-duoble__bg", {
			animation: "fadeInUp",
			delay: 200,
			duration: 750
		})
		.init();

});

// tippy('.label--tooltips', {
//         theme: 'light',
//         interactive: true,
//         content: '<strong>Bolded content</strong>',
//         allowHTML: true,
//         // content: 'Global content',
//         // arrow: tippy.roundArrow,
// });
if (document.documentElement.clientWidth < 767) {
	tippy('.hint', {
		content(reference) {
		  const id = reference.getAttribute('data-template');
		  const template = document.getElementById(id);
		  return template.innerHTML;
		},
		theme: 'tomato',
		// arrow: tippy.roundArrow,
		allowHTML: true,
		// placement: 'right',
		inlinePositioning: true,
	
	});
} else {
	tippy('.hint', {
		content(reference) {
		  const id = reference.getAttribute('data-template');
		  const template = document.getElementById(id);
		  return template.innerHTML;
		},
		theme: 'tomato',
		// arrow: tippy.roundArrow,
		allowHTML: true,
		zIndex:	900,
		placement: 'right',
		inlinePositioning: true,
	
	});
};

function bodyNoScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.add("Bodymotionless")

}
function bodyYesScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.remove("Bodymotionless")
}

const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});

$('.review__button').click(function() {
	if ($(this).text() == 'Отзыв полностью') {
			 $(this).text('скрыть');
	}
	else {
			$(this).text('Отзыв полностью');
	}
	$(this).parent().find(".review__text").toggleClass("active");
	accordionContent= $(this).parent().closest( "div.accordion__content" );
	accordionContent.css({"maxHeight":"none"})
	accordionContentHeight = $(this).parent().closest( "div.accordion__content" ).innerHeight();
	accordionContent.css({"maxHeight": accordionContentHeight})
});
$('.js-example-responsive').select2({
	theme: "custom-theme",
	language: 'ru',
	// width: '100%',
	minimumResultsForSearch: Infinity,
	dropdownAutoWidth: true,
});
$('.js-example-responsive--no-border').select2({
	theme: "custom-theme--no-border",
	language: 'ru',
	// width: '100%',
	minimumResultsForSearch: Infinity,
	dropdownAutoWidth: true,
});
$('.js-example-responsive--form').select2({
	theme: "custom-theme--form",
	language: 'ru',
	width: '100%',
	minimumResultsForSearch: Infinity,
	dropdownAutoWidth: true,
});
let btnCity = document.querySelectorAll(".btn__city")
let cities = document.querySelector(".offices__cities")
let officesMap = document.querySelector(".offices__map")
let officesMapSection = document.querySelector(".offices__map__section")
if(btnCity !==null) {
	btnCity.forEach( (item)=> {
		if (document.documentElement.clientWidth > 1079){
			item.addEventListener("click", ()=> {
				let active = cities.classList.contains("noActive");
				let citiesHieght = cities.offsetHeight;
				if(active == true)  {
				 officesMap.style.opacity = "0";
				 officesMapSection.style.height = citiesHieght + "px";
				 cities.classList.remove("noActive");
				 cities.classList.remove("animate__fadeOutRight");
				 cities.classList.add("animate__fadeInRight");
				 item.innerText = "посмотреть на карте";
				} else {
				 officesMap.style.opacity = "1"
				 cities.classList.remove("animate__fadeInRight")
				 cities.classList.add("animate__fadeOutRight", "noActive")
				 officesMapSection.style.height = "auto";
				 item.innerText = "посмотреть списком";
				}
			 })
		} else {
			item.addEventListener("click", ()=> {
				let active = cities.classList.contains("noActive");
				let officesMap = document.querySelector(".offices__map")
				if(active == true)  {
					officesMap.classList.add("noActive");
					cities.classList.remove("noActive");
					cities.classList.remove("animate__fadeOutRight");
					cities.classList.add("animate__fadeInRight");
					item.innerText = "на карте";
				} else {
					officesMap.classList.remove("noActive");
					officesMap.style.display = "flex";
					cities.classList.remove("animate__fadeInRight")
					cities.classList.add("animate__fadeOutRight", "noActive")
					item.innerText = "списком";
				}
			})  
		}
	
	})
}




let officesCitySoloClose = document.querySelector(".offices__city-solo__close")
let officesCitySoloSection = document.querySelector(".offices__city-solo__section")

let btnToOpenSideMenu = document.querySelectorAll(".js-btn-open-side-menu")
if(btnToOpenSideMenu !== null) {
	btnToOpenSideMenu.forEach( (item)=> {
		item.addEventListener("click", ()=> {
			showOfficesCitySoloSection();
		})
	})
}

if(officesCitySoloClose !== null) {
	officesCitySoloClose.addEventListener("click", ()=> {
		closeOfficesCitySoloSection();
	})
}

function showOfficesCitySoloSection() {
	officesCitySoloSection.classList.remove("animate__fadeOutLeft");
	officesCitySoloSection.classList.add("animate__fadeInLeft");
}
function closeOfficesCitySoloSection() {
	officesCitySoloSection.classList.remove("animate__fadeInLeft");
	officesCitySoloSection.classList.add("animate__fadeOutLeft");
}

let productCardSection = document.querySelector(".product-card__section")
if(productCardSection !== null) {
	var sidebar = new StickySidebar('#sidebar', {
		containerSelector: '#main-filter',
		innerWrapperSelector: '.sidebar__inner',
		topSpacing: 80,
		// containerSelector: false,
		resizeSensor: true,
		bottomSpacing: 0,
		minWidth: 0
	    });
}


$('.product-cart__filter__counter__prev').on('click', function () {
	console.log("ghbdtn")
	var $count = $(this).siblings('.product-cart__filter__counter__count');
	var $input = $(this).siblings('input');
	var count = parseInt($count.text(), 10);
	var minimum = 0;
    
	if ($input.data('minimum')) {
	  minimum = parseInt($input.data('minimum'), 10);
	}
    
	count--;
    
	if (count < minimum) {
	  count = minimum;
	}
    
	$count.text(count);
	$input.val(count);

});
$('.product-cart__filter__counter__next').on('click', function () {
	console.log($(this))
	var $count = $(this).siblings('.product-cart__filter__counter__count');
	var $input = $(this).siblings('input');
	var count = parseInt($count.text(), 10);
	console.log($count)
	console.log($input)
	console.log(count)
	var minimum = 0;

	if ($input.data('minimum')) {
		minimum = parseInt($input.data('minimum'), 10);
	}

	count++;
	$count.text(count);
	$input.val(count);

});

$('.js-mask-phone').mask('+7(000)000-00-00');

// (function() {
//         const fileLoaderContainers = document.querySelectorAll('.file-loader');
      
//         const renderFileLoader = function(fileLoaderContainer) {
//           const wrapper = fileLoaderContainer.querySelector('.file-loader__wrapper');
//           const btnAdd = fileLoaderContainer.querySelector('.js-fileloader-open');
//           if (!wrapper || !btnAdd) {
//             return;
//           }
//           const inputFileLoader = wrapper.querySelector('.file-loader__item');
//           const inputTemplate = inputFileLoader.cloneNode(true);
      
//           const maxLoaders = 10;
//           const limitBiteSize = 18000000;
      
//           const testImg = function(str) {
//             return /\.(png|jpe?g|pdf|doc|docx)$/i.test(str);
//           };
      
//           const setError = function(message) {
//             if (btnAdd) {
//               btnAdd.dataset.errorMess = message;
//             }
//           };
      
//           const isFileSizeCorrect = function(ctx) {
//             const inputs = ctx.querySelectorAll('.file-loader-js');
//             let size = 0;
//             inputs.forEach(function(i) {
//               if (i.files.length) {
//                 size += i.files[0].size;
//               }
//             });
//             return size < limitBiteSize;
//           };
      
//           const renderNewInputAttr = function(attr) {
//             const inputs = wrapper.querySelectorAll('.file-loader-js');
//             const lastInput = inputs[inputs.length - 1];
//             const regExpNumber = /\d+/;
//             const regExpName = /\D+/;
//             const currentNumber = +lastInput[attr].match(regExpNumber)[0];
//             const currentName = lastInput[attr].match(regExpName)[0];
//             return currentName + (currentNumber + 1);
//           };
      
//           const addFileLoader = function() {
//             const id = renderNewInputAttr('id');
//             const name = renderNewInputAttr('name');
//             const loaderItem = inputTemplate.cloneNode(true);
//             const input = loaderItem.querySelector('input');
//             input.id = id;
//             input.name = name;
//             wrapper.append(loaderItem);
//             btnAdd.setAttribute('for', id );
//           };
      
//           const formatSize = function(number) {
//             let unitSize = ' Байт';
//             let divider = 1;
//             if (number > 1000000) {
//               unitSize = ' Мб';
//               divider = 1000000;
//             } else if (number > 1000) {
//               unitSize = ' Кб';
//               divider = 1000;
//             }
//             return (number / divider).toFixed(1) + unitSize;
//           };
      
//           wrapper.addEventListener('change', function(e) {
//             const target = e.target;
//             const parent = target.parentElement;
//             let errorMess = '';
//             if (!target.files.length) return;
//             if (!testImg(target.files[0].name)) {
//               target.value = '';
//               errorMess = 'Некорректный тип файла';
//             } else if (!isFileSizeCorrect(wrapper)) {
//               target.value = '';
//               errorMess = 'файлы превышают лимит 18мб';
//             } else {
//               if (wrapper.childElementCount < maxLoaders) {
//                 const sizeEl = parent.querySelector('.file-loader__size');
//                 const output = parent.querySelector('.file-loader__output');
//                 if (sizeEl) {
//                   sizeEl.innerText = formatSize(target.files[0].size);
//                 }
//                 if (output) {
//                   output.innerText = target.files[0].name;
//                 }
//                 parent.classList.remove('unvisible');
//                 addFileLoader();
//               }
//             }
//             target.setCustomValidity(errorMess);
//             setError(errorMess);
//           });
//         };
      
//         fileLoaderContainers.forEach(f => renderFileLoader(f));
// })();

const questionAccordions = document.querySelectorAll(".js-accordion__question");

const questionOpenAccordion = (accordion) => {
	let headerHeight = 0;
	if (window.innerWidth > 1100){
	headerHeight = $('.section__header').outerHeight();
	}
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	var accordionActiveHeaight = $(".js-accordion__question.accordion__active .accordion__content").height();
	if(typeof(accordionActiveHeaight) === "undefined") {
	    accordionActiveHeaight = 0;
	}
	content.style.maxHeight = content.scrollHeight + "px";
	$('html, body').stop().animate({ scrollTop:$(accordion).offset().top - accordionActiveHeaight - headerHeight - 35}, 300);
	// sidebar.updateSticky();
	// sidebar.destroy();
	// console.log(headerHeight);
	// console.log(accordionActiveHeaight);
	setTimeout(() => {
		sidebar.updateSticky();
		setTimeout(() => {
			sidebar.updateSticky();
			setTimeout(() => {
				sidebar.updateSticky();
				
			}, 150);
		}, 150);
	}, 250);
	
};

const questionCloseAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
	setTimeout(() => {
		sidebar.updateSticky();
		setTimeout(() => {
			sidebar.updateSticky();
			setTimeout(() => {
				sidebar.updateSticky();
				
			}, 150);
		}, 150);
	}, 250);

};
$(function() {
	let productCardCol =  $(".product-card__col:nth-child(2)");
	if(productCardCol.length > 0){
		let heightproductCardCol =  productCardCol.height();
		productCardCol.css("min-height", heightproductCardCol);
	}

});
questionAccordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			questionCloseAccordion(accordion);
		} else {
			questionOpenAccordion(accordion);
		$(accordions).not($(accordion)).each(function(){
			questionCloseAccordion($(this)[0]);
		});
			}
		};
});