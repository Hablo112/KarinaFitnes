// function init() {
//     import('./index.header-text.js');
// }

// const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
// let loadedPartialsCount = 0;

// document.body.addEventListener('htmx:afterOnLoad', () => {
//     loadedPartialsCount++;
//     if (loadedPartialsCount === totalPartials) init();
// });
const headerTitle = document.querySelector('h2');

const greetings = [
    'Вітаю!',
    'Привіт!',
    'Hello!',
    'Салют!',
    'Добрий день!'
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
headerTitle.innerText = randomGreeting;