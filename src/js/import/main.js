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

        function bodyNoScroll() {
                let bodyBodymotionless = document.querySelector('body')
                bodyBodymotionless.classList.add("Bodymotionless")

        }
        function bodyYesScroll() {
                let bodyBodymotionless = document.querySelector('body')
                bodyBodymotionless.classList.remove("Bodymotionless")
        }
});