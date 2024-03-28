import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Delete Me!</button>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <p>Are you sure you want to delete?</p>
        <button onClick={() => setIsOpen(!isOpen)}>Cancel</button>
        <button
          onClick={() => {
            alert('Delete successful');
            setIsOpen(!isOpen);
          }}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;
