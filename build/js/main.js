'use strict';

(function () {

  const openModalForm = document.getElementsByTagName('form');
  const modalApplication = document.querySelector('.application');
  const body = document.querySelector('body');
  const ESC_KEY = 27;
  const MESSAGE_ERROR = 'Ошибка: неверный формат';

  const closeForm = function () {
    if (modalApplication.classList.contains('application--show')) {
      modalApplication.classList.remove('application--show');
      body.classList.remove('hidden');
    };
  };

  const buttonClose = document.querySelector('.application__btn');
  buttonClose.addEventListener('click', function () {
    closeForm();
  });

  const crossClose = document.querySelector('.application__btn-close');
  crossClose.addEventListener('click', function () {
    closeForm();
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === modalApplication) {
      closeForm();
    };
  });

  const closeModalEsc = function (evt) {
    if (evt.keyCode === ESC_KEY) {
      evt.preventDefault();
      closeForm();
    };
  };

  for (let i = 0; i < openModalForm.length; i++) {
    openModalForm[i].addEventListener('submit', function (evt) {
      evt.preventDefault();
      modalApplication.classList.add('application--show');
      body.classList.add('hidden');
    });
    window.addEventListener('keydown', closeModalEsc);
  };

  window.addEventListener('keydown', closeModalEsc);

  const openFormCall = document.querySelector('.request-call');
  const modalCall = document.querySelector('.order');
  const form = modalCall.querySelector('form');
  const btn = document.querySelector('#btn');
  const checkbox = document.querySelector('#agreement');
  const login = document.querySelector('#login');

  checkbox.addEventListener('click', (evt) => {
    if (evt.target.checked) btn.removeAttribute('disabled');
    else btn.setAttribute('disabled', 'disabled');
  });

  const closeFormCall = function () {
    if (modalCall.classList.contains('order--show')) {
      modalCall.classList.remove('order--show');
      body.classList.remove('hidden');
    };
  };

  const crossCloseCall = document.querySelector('.order__btn-close');
  crossCloseCall.addEventListener('click', function () {
    closeFormCall();
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === modalCall) {
      closeFormCall();
    };
  });

  const closeModalCallEsc = function (evt) {
    if (evt.keyCode === ESC_KEY) {
      evt.preventDefault();
      closeFormCall();
    };
  };

  window.addEventListener('keydown', closeModalCallEsc);

  if (openFormCall) {
    openFormCall.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalCall.classList.add('order--show');
      checkbox.focus();
      login.focus();
      body.classList.add('hidden');
    });
  };

  form.addEventListener('submit', function () {
    localStorage.setItem('name', name.value);
    localStorage.setItem('telephone', telephone.value);
    closeFormCall();
    body.classList.add('hidden');
  });

  const telephone = document.querySelector('#phone');

  const validForm = function () {
    let telephoneValue = telephone.value;
    let telephoneStyle = document.querySelector('.contacts__tel input');

    if (!/(^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$)/.test(telephoneValue)) {
      telephone.setCustomValidity(MESSAGE_ERROR);
      telephoneStyle.style.border = '2px solid red';
    } else {
      telephone.setCustomValidity('');
      telephoneStyle.style.border = '2px solid  #e5e5e5';
    };
  };

  telephone.addEventListener('input', function () {
    validForm();
  });

  const accordion = document.getElementsByClassName("accordion__box");

  if (accordion) {
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    };
  };

  let slider = document.querySelector('.swiper-container');

  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
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

    if (window.innerWidth > 767) {
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

  let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
      tabNav.forEach(item => {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
    }

  };

  tab();

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

})();
