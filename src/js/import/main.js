

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
        new Skroll()
                .add(".portable__picture", {
                        animation: "fadeInRight",
                        delay: 600,
                        duration: 750
                })
                .add(".portable__col__one", {
                        animation: "fadeInLeft",
                        delay: 600,
                        duration: 750
                })
                .add(".sonic-sensor__bg", {
                        animation: "fadeInUp",
                        delay: 600,
                        duration: 750
                })
                .add(".dynamic-sensor__bg", {
                        animation: "fadeInUp",
                        delay: 600,
                        duration: 750
                })
                .add(".electronic-unit__bg", {
                        animation: "fadeInUp",
                        delay: 600,
                        duration: 750
                })
                .add(".equipment__bg", {
                        animation: "fadeInLeft",
                        delay: 600,
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
//- удалить эту кнопку она для демострации
let btnTemporery = document.querySelectorAll(".btn__temporery")
if(btnTemporery !== null) {
        btnTemporery.forEach( (item)=> {
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