import './App.css';
import { useEffect, useState } from 'react';
import { Buttons } from './Buttons';
import { Carousel } from './Carousel';
import { PrevNextButton } from './PrevNextbutton';

const images = [
  {
    src: './fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: './inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: './itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: './kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: './panda.webp',
    alt: 'Panda',
  },
  {
    src: './zen-in.webp',
    alt: "Maki Zen'in",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutID);
  }, [currentIndex]);

  return (
    <>
      <div className="row">
        <PrevNextButton
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
          isLeft={true}
        />
        <Carousel image={images[currentIndex]} />
        <PrevNextButton
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          isLeft={false}
        />
      </div>
      <div className="row">
        <Buttons
          onClick={(i: number) => setCurrentIndex(i)}
          num={images.length}
          index={currentIndex}
        />
      </div>
    </>
  );
}

export default App;
