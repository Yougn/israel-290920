//Реализация модального окна "Заявка принята"

let openModalForm = document.getElementsByTagName('form');
let modalApplication = document.querySelector('.application');
let ESC_KEY = 27;

let closeForm = function () {
  if (modalApplication.classList.contains('application--show')) {
    modalApplication.classList.remove('application--show');
  };
};

let buttonClose = document.querySelector('.application__btn');
buttonClose.addEventListener('click', function () {
  closeForm();
});

let crossClose = document.querySelector('.application__btn-close');
crossClose.addEventListener('click', function () {
  closeForm();
});

window.addEventListener('click', function (evt) {
  if (evt.target === modalApplication) {
    closeForm();
  };
});

let closeModalEsc = function (evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeForm();
  };
};

for (let i = 0; i < openModalForm.length; i++) {
  openModalForm[i].addEventListener('submit', function (evt) {
    evt.preventDefault();
    modalApplication.classList.add('application--show');
  });
  window.addEventListener('keydown', closeModalEsc);
};

window.addEventListener('keydown', closeModalEsc);

//Реализация модального окна "Заказать звонок"

let openFormCall = document.querySelector('.request-call');
let modalCall = document.querySelector('.order');
let name = modalCall.querySelector('[name=name]');
let form = modalCall.querySelector('form');

let closeFormCall = function () {
  if (modalCall.classList.contains('order--show')) {
    modalCall.classList.remove('order--show');
  };
};

let crossCloseCall = document.querySelector('.order__btn-close');
crossCloseCall.addEventListener('click', function () {
  closeFormCall();
});

window.addEventListener('click', function (evt) {
  if (evt.target === modalCall) {
    closeFormCall();
  };
});

let closeModalCallEsc = function (evt) {
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
    name.focus();
  });
};

form.addEventListener("submit", function () {
  localStorage.setItem('name', name.value);
  localStorage.setItem('telephone', telephone.value);
  closeFormCall();
});
