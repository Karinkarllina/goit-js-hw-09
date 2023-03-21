import { Notify } from 'notiflix/build/notiflix-notify-aio';

  const formEl = document.querySelector('.form');
  const delayEl = document.querySelector('[name="delay"]');
  const stepEl = document.querySelector('[name="step"]');
  const amountEl = document.querySelector('[name="amount"]');



formEl.addEventListener('submit', generationPromise);

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function generationPromise(event) {
  event.preventDefault();
  
  for (let i = 1; i <= Number(amountEl.value); i += 1) {
    let promiseEl = Number(delayEl.value) + Number(stepEl.value) * i;
    console.log(promiseEl);
    
   
  createPromise(i, promiseEl)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}