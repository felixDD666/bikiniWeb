$(document).ready(function () {
  var swiper = new Swiper('.swiper-container1', {
      pagination: '.swiper-pagination1',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: 3000,
        loop: true,
        speed: 1500,
      coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
      }
  });

  var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: 2000,
        loop: true,
        speed: 1000,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});