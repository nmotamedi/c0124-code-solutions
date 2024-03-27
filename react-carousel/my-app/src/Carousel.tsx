import { useEffect, useState } from 'react';
import { Buttons } from './Buttons';
import { PrevNextButton } from './PrevNextbutton';
import { Image } from './image';

type Prop = {
  images: {
    src: string;
    alt: string;
  }[];
};

export function Carousel({ images }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutID);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="row">
        <PrevNextButton
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
          isLeft={true}
        />
        <Image image={images[currentIndex]} />
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
