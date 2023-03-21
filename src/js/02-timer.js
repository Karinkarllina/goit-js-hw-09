import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const dataInputEl = document.querySelector('input#datetime-picker');
const startTimerEl = document.querySelector('button[data-start]');
const timerDaysEl = document.querySelector('[data-days]');
const timerHoursEl = document.querySelector('[data-hours]');
const timerMinutesEl = document.querySelector('[data-minutes]');
const timerSecondsEl = document.querySelector('[data-seconds]');


startTimerEl.setAttribute("disabled", "disabled");
startTimerEl.addEventListener('click', startTimer);

let onDate = null;
let intervalId = null;
let currentDate = null;
let timeCounter = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        onDate = selectedDates[0];
      if (onDate.getTime() < options.defaultDate) {
          Notify.failure('Please choose a date in the future');
          startTimerEl.setAttribute("disabled", "disabled");
      }
      else {
          startTimerEl.removeAttribute('disabled', 'disabled');
      }
  },
};

flatpickr(dataInputEl, options);

function startTimer() {
    intervalId = setInterval(() => {
        currentDate = new Date().getTime();
        if (onDate - currentDate <= 0 ) {
          clearInterval(intervalId);
          startTimerEl.setAttribute("disabled", "disabled");
          dataInputEl.removeAttribute("disabled", "disabled");
          return

        }
        else {
           timeCounter = onDate - currentDate;
            convertMs(timeCounter);
            startTimerEl.setAttribute("disabled", "disabled");
            dataInputEl.setAttribute("disabled", "disabled");

        }
    }, 1000);
}


function createMarkup({ days, hours, minutes, seconds }) {
  timerDaysEl.textContent = days;
  timerHoursEl.textContent = hours;
  timerMinutesEl.textContent = minutes;
  timerSecondsEl.textContent = seconds;
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
  createMarkup({ days, hours, minutes, seconds });
  
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}