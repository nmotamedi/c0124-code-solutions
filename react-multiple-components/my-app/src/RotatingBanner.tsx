import { Text } from './Text';
import { Buttons } from './Buttons';
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
        <Buttons onClick={handlePrev} text="Prev" />
      </div>
      <Buttons
        onClick={handleNumClick}
        length={items.length}
        index={currentIndex}
      />
      <div>
        <Buttons onClick={handleNext} text="Next" />
      </div>
    </>
  );
}
