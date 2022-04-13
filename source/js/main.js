
const nav = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__toggle');
const bookingForm = document.querySelector('#booking-form');
const buttonSubmit = bookingForm.querySelector('#submit-button');
const inputName = bookingForm.querySelector('#name');
const inputTel = bookingForm.querySelector('#tel');
const inputMail = bookingForm.querySelector('#email');
const inputCheckbox = bookingForm.querySelector('#checkbox');
const logo = document.querySelector('#logo');
const overlay = document.querySelector('.overlay');
const navList = document.querySelector('#nav-list');
const blueLogo = document.querySelector('.nav__logo-wrapper_blue');

const navMenuToggler = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');

  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed') && nav.offsetWidth < 767) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      logo.style.visibility = 'hidden';
      overlay.classList.add('overlay--visible');
      document.body.style.overflowY = 'hidden';
      navList.style.overflowY = 'scroll';
      navList.focus();
      blueLogo.classList.add('nav__logo-wrapper_blue--shown');
    } else {
      nav.classList.remove('nav--opened');
      logo.style.visibility = 'initial';
      nav.classList.add('nav--closed');
      overlay.classList.remove('overlay--visible');
      document.body.style.overflowY = 'inherit';
      blueLogo.classList.remove('nav__logo-wrapper_blue--shown');
      navList.style.overflowY = 'initial';
    }
  });
};

const handlerOnNavListScroll = () => {
  let navScrolled = navList.scrollTop;
  if (navScrolled > 10) {
    blueLogo.classList.remove('nav__logo-wrapper_blue--shown');
  } else {
    blueLogo.classList.add('nav__logo-wrapper_blue--shown');
  }
};

const handlerOnNavListClick = (evt) => {
  if (evt.target.closest('li') && nav.offsetWidth < 767) {
    document.body.style.overflowY = 'inherit';
    overlay.classList.remove('overlay--visible');
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    logo.style.visibility = 'initial';
    blueLogo.classList.remove('nav__logo-wrapper_blue--shown');
    navList.style.overflowY = 'initial';
  } else {
    nav.classList.add('nav--opened');
    nav.classList.remove('nav--closed');
  }
};

const handlerOnOverlayClick = (evt) => {
  if (evt.target === overlay && nav.offsetWidth < 767) {
    overlay.classList.remove('overlay--visible');
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    logo.style.visibility = 'initial';
    document.body.style.overflowY = 'inherit';
    blueLogo.classList.remove('nav__logo-wrapper_blue--shown');
    navList.style.overflowY = 'initial';
  } else {
    overlay.classList.add('overlay--visible');
  }
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
navList.addEventListener('click', handlerOnNavListClick);
overlay.addEventListener('click', handlerOnOverlayClick);
navList.addEventListener('scroll', handlerOnNavListScroll);
