import { useState } from 'react';
import './App.css';
import { Stopwatch } from './Stopwatch';

function App() {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);
  const [intervalIDState, setID] = useState<NodeJS.Timeout>();

  function countUp() {
    setCount((count) => count + 1);
  }

  function handleIconClick() {
    if (pause) {
      const intervalID = setInterval(countUp, 1000);
      setID(intervalID);
      setPause(false);
    } else {
      clearInterval(intervalIDState);
      setPause(true);
    }
  }

  function handleFaceClick() {
    if (pause) {
      setCount(0);
    }
  }

  return (
    <Stopwatch
      onIconClick={handleIconClick}
      onFaceClick={handleFaceClick}
      count={count}
      pauseState={pause}
    />
  );
}

export default App;
