// Реализация второго swiper-slider

const sliderOne = document.querySelector('.slider-container');

let mySwiperOne = new Swiper(sliderOne, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  slideClass: 'slide',
  wrapperClass: 'slider-wrap',
  pagination: {
    el: '.slider-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
