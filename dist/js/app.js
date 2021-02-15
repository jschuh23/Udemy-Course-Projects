const hamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__list--item');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
});
