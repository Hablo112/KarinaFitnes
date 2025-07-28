// function init() {
//     import('./index.header-text.js');
// }

// const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
// let loadedPartialsCount = 0;

// document.body.addEventListener('htmx:afterOnLoad', () => {
//     loadedPartialsCount++;
//     if (loadedPartialsCount === totalPartials) init();
// });
const headerTitle = document.querySelector("h2");

const greetings = ["Вітаю!", "Привіт!", "Hello!", "Салют!", "Добрий день!"];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
headerTitle.innerText = randomGreeting;

const slides = [
  '<div><img src="img/addmuskuls.png" alt="addmuskuls"></div>',
  '<div><img src="img/karinalogo.png" alt="karinalogo"></div>',
  '<div><img src="img/scena.jpg" alt="karinanascene"></div>',
  '<div><img src="img/studia.jpg" alt="photostudia"></div>',
];

const carousel = document.querySelector(".product-carousel__slide-container");
let currentIndex = 0;

function showSlides() {
  carousel.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 640px)").matches) {
    const secondSlideIndex = (currentIndex + 1) % slides.length;
    carousel.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIndex = (currentIndex + 2) % slides.length;
      carousel.innerHTML += slides[thirdSlideIndex];
    }
  }
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides();
}
// setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlides(); // Initial call to display the first slide

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlides();
}

const nextBtn = document.querySelector(".product-carousel__btn-next");
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.querySelector(".product-carousel__btn-prev");
prevBtn.addEventListener("click", prevSlide);

window.addEventListener("resize", showSlides);
