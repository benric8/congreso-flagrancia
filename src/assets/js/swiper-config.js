
function config(){
    //effect: "cards","fade", "cube"
    var swiper = new Swiper(".swiper-pj-contaniner", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    //console.log("config swiper 2");
}