

$(window).on('load',function (){
    let containerSocGray  = document.querySelector(".js-container__soc-gray ")
    if(containerSocGray !== null) {
        if(document.documentElement.clientWidth > 992) {
            var sidebar2 = new StickySidebar('#soc--gray', {
                containerSelector: '.js-container__soc-gray',
                innerWrapperSelector: '.sidebar__inner',
                topSpacing: 80+236,
                resizeSensor: false,
                bottomSpacing: 0
            });
        } else {
            var sidebar2 = null;
        }

    }

});
