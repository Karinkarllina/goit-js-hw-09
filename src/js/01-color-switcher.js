const COLOR_DELAY = 1000;
let interId = null;

const dataStartEl = document.querySelector('button[data-start]');
const dataStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

bodyEl.style.textAlign = 'center';

dataStartEl.style.cssText = 'padding: 10px 20px; margin-right: 10px; text-transform: uppercase'
dataStopEl.style.cssText = 'padding: 10px 20px; text-transform: uppercase'

dataStopEl.setAttribute('disabled', 'disabled');

dataStartEl.addEventListener('click', startChangeColor);
dataStopEl.addEventListener('click', stopChangeColor);

function startChangeColor() {
    dataStartEl.setAttribute('disabled', 'disabled'); 
    dataStopEl.removeAttribute('disabled');
    
    interId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
}, COLOR_DELAY); 
}



function stopChangeColor() {
    dataStartEl.removeAttribute('disabled');
    dataStopEl.setAttribute('disabled', 'disabled');

    clearInterval(interId);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

