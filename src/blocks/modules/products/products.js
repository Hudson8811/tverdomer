	///tabs
	
	var ProductsTabNavs = document.querySelectorAll(".products__tab");
	var ProductsTabPanes = document.querySelectorAll(".products-pane");
  if(ProductsTabNavs !==null & ProductsTabPanes !==null) {
		tabClick() 
	}
	function tabClick() {
		console.log("клик")
		for (var i = 0; i < ProductsTabNavs.length; i++) {

			ProductsTabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < ProductsTabNavs.length; j++) {
					var contentAttr = ProductsTabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						ProductsTabNavs[j].classList.add("active");
						ProductsTabPanes[j].classList.add("active"); 
					} else {
						ProductsTabNavs[j].classList.remove("active");
						ProductsTabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
	///tabs

