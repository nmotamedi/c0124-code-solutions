const $userName = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');

if (!$userName || !$email || !$message) {
  throw new Error('$userName, $email, or $message query failed.');
}

function handleFocus(event: Event): void {
  console.log('Focus event has fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('Focus eventTarget name: ', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('Blur event has fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('Blur eventTarget name: ', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
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
