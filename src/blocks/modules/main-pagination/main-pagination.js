
// $(".main__pagination__item").click(function(event){     
//     event.preventDefault();
//     console.log(this)
//     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
// });

$(document).ready(function () {
	$(function () {
			$('.main__pagination__item').click(function (e) {
					$('.main__pagination__item').removeClass('active');
					$(this).addClass('active');
			});
	});
});