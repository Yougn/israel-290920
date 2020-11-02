'use strict';

(function () {

  //Реализация модального окна "Заявка принята"

  const openModalForm = document.getElementsByTagName('form');
  const modalApplication = document.querySelector('.application');
  const body = document.querySelector('body');
  const ESC_KEY = 27;

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

  //Реализация модального окна "Заказать звонок"

  const openFormCall = document.querySelector('.request-call');
  const modalCall = document.querySelector('.order');
  const form = modalCall.querySelector('form');
  const btn = document.querySelector('#btn');
  const checkbox = document.querySelector('#agreement');

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
      body.classList.add('hidden');
    });
  };

  form.addEventListener('submit', function () {
    localStorage.setItem('name', name.value);
    localStorage.setItem('telephone', telephone.value);
    closeFormCall();
    body.classList.add('hidden');
  });

  // Валидация формы телефона

  const telephone = document.querySelector('#phone');

  const validForm = function () {
    let telephoneValue = telephone.value;

    if (!/(^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$)/.test(telephoneValue)) {
      telephone.setCustomValidity('Ошибка: неверный формат');
      telephone.style.border = '2px solid red';
    } else {
      telephone.setCustomValidity('');
      telephone.style.border = '2px solid #484848';
      telephone.style.opacity = '0.5';
    };
  };

  telephone.addEventListener('input', function () {
    validForm();
  });

})();
