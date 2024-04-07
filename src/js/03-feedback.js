const form = document.querySelector('form.feedback-form');

const formDataStr = localStorage.getItem9('feedback-form-state');
if (formDataStr) {
  const formData = JSON.parse(formDataStr);
  form.elementSibling.email.value = formData.email;
  form.elementSibling.message.value = formData.message;
}

form.addEventListener('imput', ev => {
  const data = {
    email: ev.target.elements.email.value,
    message: ev.target.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log({
    email: ev.target.elements.email.value,
    message: ev.target.elements.message.value,
  });
  localStorage.clear();
  form.clear();
});
