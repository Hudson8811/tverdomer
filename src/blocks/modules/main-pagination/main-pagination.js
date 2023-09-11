
// $(".main__pagination__item").click(function(event){     
//     event.preventDefault();
//     console.log(this)
//     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
// });

// $(document).ready(function () {
// 	$(function () {
// 			$('.main__pagination__item').click(function (e) {
// 					$('.main__pagination__item').removeClass('active');
// 					$(this).addClass('active');
// 			});
// 	});
// });
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.main__pagination__item');
  let fromTop = window.scrollY + 72;
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});