
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