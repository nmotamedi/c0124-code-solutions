interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;
$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
  const controlNames: { name: string; email: string; message: string } = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form Values: ', controlNames);
  console.log($formElements);
  $form.reset();
});
