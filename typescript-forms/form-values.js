'use strict';
const $form = document.querySelector('#contact-form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const controlNames = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form Values: ', controlNames);
  console.log($formElements);
  $form.reset();
});
