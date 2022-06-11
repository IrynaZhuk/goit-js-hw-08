
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const emailItem = form.elements.email;
const messageItem = form.elements.message;

enterDataIntoForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = emailItem.value;
  const message = messageItem.value;

  localStorage.setItem('formData', JSON.stringify({ email, message }));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('formData')));
  localStorage.removeItem('formData');
}

function enterDataIntoForm() {
  const savedMessage = localStorage.getItem('formData');
  if (savedMessage) {
    const formData = JSON.parse(savedMessage);
    emailItem.value = formData.email;
    messageItem.value = formData.message;
  }
}

