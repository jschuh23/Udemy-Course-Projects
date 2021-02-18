const hamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__list--item');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }

  navList.classList.toggle('open');
});
