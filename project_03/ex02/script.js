
const titleElement = document.getElementById('main-title');
const descElement = document.querySelector('.description');
const boxElement = document.querySelector('.box');

titleElement.textContent = "Updated Live DOM Title";
descElement.textContent = "This text content has been modified in real-time.";

titleElement.style.color = "crimson";

boxElement.classList.add('active');