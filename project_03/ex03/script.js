
let count = 0;

const countDisplay = document.getElementById('count-display');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.className = 'positive';
    } else if (count < 0) {
        countDisplay.className = 'negative';
    } else {
        countDisplay.className = 'zero';
    }
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
btnReset.addEventListener('click', reset);