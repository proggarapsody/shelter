import { initSwiper } from './pets-slider';

const nextButt = document.querySelector('.pag__next-butt');
const prevButt = document.querySelector('.pag__prev-butt');
const firstButt = document.querySelector('.pag__first-butt');
const lastButt = document.querySelector('.pag__last-butt');
const pagNumber = document.querySelector('.pag__number');
const ourPetsSlider = document.querySelector('.pets-swiper__wrapper');

window.addEventListener('load', async () => {
  const itemsPerView =
    (window.innerWidth > 1200 && 8) ||
    (window.innerWidth < 700 && 3) ||
    (window.innerWidth < 1200 && window.innerWidth > 700 && 6);
  const swiperItemsPerView =
    (window.innerWidth > 1200 && 3) ||
    (window.innerWidth < 700 && 1) ||
    (window.innerWidth < 1200 && window.innerWidth > 700 && 2);

  let PETS = [];
  const result = await fetch('./pets.json');
  PETS = await result.json();

  PETS = [...PETS, ...PETS, ...PETS, ...PETS, ...PETS, ...PETS];
  let SWIPER_PETS = shuffle(PETS, swiperItemsPerView);
  PETS = shuffle(PETS, itemsPerView);

  try {
    SWIPER_PETS.forEach((pet, i) => {
      if (ourPetsSlider) {
        ourPetsSlider.innerHTML += `<div class="swiper-slide pet open-modal" data-index="${i}">
  <div class="pet__img"><img src="${PETS[i].img}" alt="pet-img" /></div>
  <span class="pet__name">${PETS[i].name}</span>
  <button class="button--outline">Learn
    more</button>
  </div>`;
      }
    });
    initSwiper();
  } catch (error) {
    console.log(error);
  }

  // PETS = [
  //   ...PETS,
  //   shuffle(Object.values(PETS)),
  //   shuffle(Object.values(PETS)),
  //   shuffle(Object.values(PETS)),
  //   shuffle(Object.values(PETS)),
  //   shuffle(Object.values(PETS)),
  // ];

  initButtons();

  if (!nextButt) return;
  let currentPage = 1;
  const totalItems = PETS.length;

  const totalPages = Math.ceil(totalItems / itemsPerView);

  if (pagNumber) {
    pagNumber.textContent = currentPage;
  }

  const petsBlock = document.querySelector('.pets-block');

  fillPets();

  nextButt.addEventListener('click', () => {
    if (currentPage == totalPages) {
      return;
    }
    currentPage += 1;
    if (currentPage == 2) {
      prevButt.classList.remove('disabled');
      firstButt.classList.remove('disabled');
    }
    if (currentPage == totalPages) {
      nextButt.classList.add('disabled');
      lastButt.classList.add('disabled');
    }
    pagNumber.textContent = currentPage;
    fillPets();
  });

  lastButt.addEventListener('click', () => {
    if (currentPage == totalPages) {
      return;
    }
    currentPage = totalPages;
    nextButt.classList.add('disabled');
    lastButt.classList.add('disabled');
    if (prevButt.classList.contains('disabled')) {
      prevButt.classList.remove('disabled');
      firstButt.classList.remove('disabled');
    }
    pagNumber.textContent = currentPage;
    fillPets();
  });

  prevButt.addEventListener('click', () => {
    if (currentPage == 1) {
      return;
    }
    currentPage -= 1;
    if (currentPage == 1) {
      prevButt.classList.add('disabled');
      firstButt.classList.add('disabled');
    }
    if (currentPage == totalPages - 1) {
      nextButt.classList.remove('disabled');
      lastButt.classList.remove('disabled');
    }
    pagNumber.textContent = currentPage;
    fillPets();
  });

  firstButt.addEventListener('click', () => {
    if (currentPage == 1) {
      return;
    }
    currentPage = 1;
    prevButt.classList.add('disabled');
    firstButt.classList.add('disabled');
    if (nextButt.classList.contains('disabled')) {
      nextButt.classList.remove('disabled');
      lastButt.classList.remove('disabled');
    }
    pagNumber.textContent = currentPage;
    fillPets();
  });

  function fillPets() {
    if (!petsBlock) return;
    petsBlock.innerHTML = '';

    for (
      let i = (currentPage - 1) * itemsPerView;
      i < (currentPage - 1) * itemsPerView + itemsPerView;
      i++
    ) {
      petsBlock.innerHTML += `<div class="pet open-modal" data-index="${i}">
  <div class="pet__img"><img src="${PETS[i].img}" alt="pet-img" /></div>
  <span class="pet__name">${PETS[i].name}</span>
  <button class="button--outline">Learn
    more</button>
  </div>`;

      initButtons();
    }
  }

  function initButtons() {
    const openButts = document.querySelectorAll('.open-modal');

    openButts.forEach((butt) => {
      butt.addEventListener('click', (e) => {
        const cardId = e.target.closest('.pet').getAttribute('data-index');
        console.log(PETS[cardId]);
        openModal(PETS[cardId]);
      });
    });
  }
  function shuffle(arr, part) {
    console.log(arr);
    let res = [];
    for (let i = 0; i < arr.length; i += part) {
      res = [...res, ...arr.slice(i, i + part).sort(() => Math.random() - 0.5)];
    }
    console.log('res = ' + res);
    return res;
  }
});
