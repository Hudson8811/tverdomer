let containerSocGray  = document.querySelector(".js-container__soc-gray ")
if(containerSocGray !== null) {
  var sidebar2 = new StickySidebar('#soc--gray', {
          containerSelector: '.js-container__soc-gray',
          innerWrapperSelector: '.sidebar__inner',
          topSpacing: 80,
          // resizeSensor: false,
          bottomSpacing: 0
      });
}