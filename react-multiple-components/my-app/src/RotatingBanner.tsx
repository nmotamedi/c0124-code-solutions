import { Text } from './Text';
import { PrevNextButtons } from './PrevNextButtons';
import { Numbers } from './Numbers';
import React, { useState } from 'react';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleNumClick(event: React.MouseEvent<HTMLButtonElement>) {
    const eventTarget = event.target as HTMLButtonElement;
    const num = eventTarget.textContent;
    setCurrentIndex(+num!);
  }

  return (
    <>
      <div>
        <Text text={items[currentIndex]} />
      </div>
      <div>
        <PrevNextButtons onClick={handlePrev} text="Prev" />
      </div>
      <Numbers
        onClick={handleNumClick}
        length={items.length}
        index={currentIndex}
      />
      <div>
        <PrevNextButtons onClick={handleNext} text="Next" />
      </div>
    </>
  );
}
