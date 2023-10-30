// scripts do slide

var slide = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
})


const cardsPokemon = document.querySelectorAll('.js-open-datails-pokemon')
const btnCloseModal = document.querySelector('.js-btn-close-modal')

function openModal(){
  document.documentElement.classList.add('open-modal')
}

function closeModal(){
  document.documentElement.classList.remove('open-modal')
}

cardsPokemon.forEach(card => {
  card.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);