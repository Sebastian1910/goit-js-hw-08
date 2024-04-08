// Importowanie funkcji throttle z biblioteki Lodash
import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');

// Pobieranie danych z local storage
const formDataStr = localStorage.getItem('feedback-form-state');
if (formDataStr) {
  const formData = JSON.parse(formDataStr);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Funkcja do zapisywania danych w local storage z opóźnieniem
const saveFormDataThrottled = throttle(() => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

// Nasłuchiwanie zdarzenia input i zapisywanie danych w local storage
form.addEventListener('input', ev => {
  saveFormDataThrottled();
});

// Nasłuchiwanie zdarzenia submit i czyszczenie local storage oraz pól formularza
form.addEventListener('submit', ev => {
  ev.preventDefault();
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
