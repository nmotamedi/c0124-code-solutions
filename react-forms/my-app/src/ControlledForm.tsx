import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('ControlledFormObject', { username, password });
  }

  return (
    <form id="controlledForm" onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:{' '}
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}></input>
      </label>
      <button>SUBMIT</button>
    </form>
  );
}
