// Реализация swiper-slider

let slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 700 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      slideClass: 'swiper-card',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 700) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});
