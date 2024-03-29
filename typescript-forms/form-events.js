'use strict';
const $userName = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');
if (!$userName || !$email || !$message) {
  throw new Error('$userName, $email, or $message query failed.');
}
function handleFocus(event) {
  console.log('Focus event has fired');
  const eventTarget = event.target;
  console.log('Focus eventTarget name: ', eventTarget.name);
}
function handleBlur(event) {
  console.log('Blur event has fired');
  const eventTarget = event.target;
  console.log('Blur eventTarget name: ', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('Input eventTarget name: ', eventTarget.name);
  console.log('Input eventTarget value: ', eventTarget.value);
}
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
