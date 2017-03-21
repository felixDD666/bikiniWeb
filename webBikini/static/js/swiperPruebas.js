$(document).ready(function () {
/*SWIPER 1*/ 
    var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination1',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
/*SWIPER 2*/
    var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
});
