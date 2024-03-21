import { useState } from 'react';
import './App.css';
import { Stopwatch } from './Stopwatch';

function App() {
  const [count, setCount] = useState(0);
  const [intervalIDState, setID] = useState<NodeJS.Timeout>();
  const play: boolean = !!intervalIDState;

  function countUp() {
    setCount((count) => count + 1);
  }

  function handleIconClick() {
    if (!play) {
      const intervalID = setInterval(countUp, 1000);
      setID(intervalID);
    } else {
      setID(undefined);
      clearInterval(intervalIDState);
    }
  }

  function handleFaceClick() {
    if (!play) {
      setCount(0);
    }
  }

  return (
    <Stopwatch
      onIconClick={handleIconClick}
      onFaceClick={handleFaceClick}
      count={count}
      pauseState={play}
    />
  );
}

export default App;
