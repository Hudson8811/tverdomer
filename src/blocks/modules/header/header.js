
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
search.hover( function(e) {
  $(this).children(".header__other__search__input").toggleClass("active"); 

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



