import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const eventTarget = event.currentTarget as HTMLFormElement;
    const eventElements = new FormData(eventTarget);
    const formObject = Object.fromEntries(eventElements);
    console.log('UncontrolledFormObject', formObject);
  }

  return (
    <>
      <form id="registration-form" onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text"></input>
        </label>
        <label>
          Password: <input name="password" type="password"></input>
        </label>
        <button>SUBMIT</button>
      </form>
    </>
  );
}
