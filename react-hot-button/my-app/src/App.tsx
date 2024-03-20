import { useState } from 'react';
import './App.css';
import { Button } from './Button';

function App() {
  const [clickCount, setCount] = useState(0);
  function handleButtonClick(): void {
    setCount(clickCount + 1);
  }

  return (
    <>
      <Button onButtonClick={handleButtonClick} count={clickCount} />
    </>
  );
}

export default App;
