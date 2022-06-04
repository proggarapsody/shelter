var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
var image = document.querySelector('.modal__img');
var title = document.querySelector('.modal__title');
var subtitle = document.querySelector('.modal__subtitle');
var descr = document.querySelector('.modal__descr');
var age = document.querySelector('.modal__age');
var inoculations = document.querySelector('.modal__inoculations');
var diseases = document.querySelector('.modal__diseases');
var parasites = document.querySelector('.modal__parasites');
var closeButt = document.querySelector('.modal__close');

function openModal(pet) {
  unloadScrollBars();

  modal.style.display = 'block';
  image.innerHTML = `<img src="${pet.img}"></img>`;
  title.textContent = pet.name;
  subtitle.textContent = pet.breed;
  descr.textContent = pet.description;
  age.innerHTML = `<b>Age: </b>` + pet.age;
  inoculations.innerHTML = `<b>Inoculations: </b>` + pet.inoculations;
  diseases.innerHTML = `<b>Diseases: </b>` + pet.diseases;
  parasites.innerHTML = `<b>Parasites: </b>` + pet.parasites;
}

// // When the user clicks on <span> (x), close the modal
closeButt.onclick = function () {
  modal.style.display = 'none';
  reloadScrollBars();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    reloadScrollBars();
  }
};

function reloadScrollBars() {
  document.documentElement.style.overflow = 'auto'; // firefox, chrome
  document.body.scroll = 'yes'; // ie only
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = 'no'; // ie only
}

window.openModal = openModal;
