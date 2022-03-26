
const nav = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__toggle');
const bookingForm = document.querySelector('#booking-form');
const buttonSubmit = bookingForm.querySelector('#submit-button');
const inputName = bookingForm.querySelector('#name');
const inputTel = bookingForm.querySelector('#tel');
const inputMail = bookingForm.querySelector('#email');
const inputCheckbox = bookingForm.querySelector('#checkbox');

const navMenuToggler = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');

  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
    } else {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
    }
  });
};

const onInputNameChange = () => {
  const valueNameInput = inputName.value;

  if (valueNameInput.length === 0) {
    inputName.setCustomValidity('Пожалуйста введите ваше имя');
  } else {
    inputName.setCustomValidity('');
  }

  inputName.reportValidity();
};

const onInputTelChange = () => {
  const valueTelInput = inputTel.value;

  if (valueTelInput.length === 0) {
    inputTel.setCustomValidity('Пожалуйста введите ваш номер телефона, пример: 88005553535');
  } else {
    inputTel.setCustomValidity('');
  }

  inputTel.reportValidity('');
};

const onInputMailChange = () => {
  const valueMailInput = inputMail.value;

  if (valueMailInput.length === 0) {
    inputMail.setCustomValidity('Пожалуйста введите вашу почту, пример: example@gmail.com');
  } else {
    inputMail.setCustomValidity('');
  }

  inputMail.reportValidity();
};

const onInputCheckboxChange = () => {
  if (inputCheckbox.checked === false) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }

};

const addFormListeners = () => {
  inputName.addEventListener('change', onInputNameChange);
  inputTel.addEventListener('change', onInputTelChange);
  inputMail.addEventListener('change', onInputMailChange);
  inputCheckbox.addEventListener('change', onInputCheckboxChange);
};

addFormListeners();
navMenuToggler();
