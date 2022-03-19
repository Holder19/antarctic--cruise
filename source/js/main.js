const nav = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__toggle');

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

navMenuToggler();
