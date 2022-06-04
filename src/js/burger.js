const burger = document.querySelector('.burger-button');
const mainLogo = document.querySelector('.header__logo');
const nav = document.querySelector('.header__nav');
const navWrapper = document.querySelector('.header__nav-wrapper');
const navLogo = document.querySelector('.header__nav-logo');
burger.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    closeNav();
  } else {
    openNav();
  }
});

navWrapper.addEventListener('click', (e) => {
  if (e.target === navWrapper) {
    closeNav();
  }
});

function reloadScrollBars() {
  document.documentElement.style.overflow = 'auto'; // firefox, chrome
  document.body.scroll = 'yes'; // ie only
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = 'no'; // ie only
}

function openNav() {
  nav.classList.add('active');
  nav.style.transform = 'translateX(0px)';
  mainLogo.style.opacity = 0;
  setTimeout(() => {
    navLogo.style.opacity = 1;
  }, 300);
  burger.style.transform = 'translateY(-50%) rotate(-90deg)';
  navWrapper.classList.add('active');
  unloadScrollBars();
}

export function closeNav() {
  nav.classList.remove('active');
  nav.style.transform = 'translateX(320px)';
  mainLogo.style.opacity = 1;
  navLogo.style.opacity = 0;
  burger.style.transform = 'translateY(-50%) rotate(0deg)';
  navWrapper.classList.remove('active');
  reloadScrollBars();
}
