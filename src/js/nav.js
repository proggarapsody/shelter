import { closeNav } from './burger';

const navItems = document.querySelectorAll('.nav-link');

navItems.forEach((el) => {
  el.addEventListener('click', () => {
    closeNav();
  });
});
