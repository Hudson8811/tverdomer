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
		$('.news__select').select2();


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


