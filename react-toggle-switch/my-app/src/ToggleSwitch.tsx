import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [on, setOn] = useState(true);

  function handleToggle() {
    on ? setOn(false) : setOn(true);
  }

  return (
    <>
      <div onClick={handleToggle} className={`switch ${on ? 'on' : 'off'}`}>
        <div className="circle"></div>
      </div>
      <p>{on ? 'on' : 'off'}</p>
    </>
  );
}
