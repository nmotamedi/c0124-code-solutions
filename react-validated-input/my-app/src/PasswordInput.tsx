import './PasswordInput.css';
import { useState } from 'react';

export function PasswordInput() {
  const [typedValue, setTypedValue] = useState('');

  let message = '';

  const passwordLength = typedValue.length;
  const missingCriteria = [];

  if (passwordLength === 0) {
    message = 'A password is required';
  } else if (passwordLength < 8) {
    message = 'Your password is too short';
  } else {
    if (!/\d/.test(typedValue)) {
      missingCriteria.push('number');
    }
    if (!/[A-Z]/.test(typedValue)) {
      missingCriteria.push('uppercase letter');
    }
    if (!/[!@#$%^&*()]/.test(typedValue)) {
      missingCriteria.push('special character');
    }
    if (missingCriteria.length > 0) {
      message = 'Password Missing: ' + missingCriteria.join(', ') + '.';
    }
  }

  return (
    <div>
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        value={typedValue}
        onChange={(e) => setTypedValue(e.target.value)}></input>
      <p>{message}</p>
    </div>
  );
}
