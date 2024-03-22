import { Text } from './Text';
import { PrevNextButtons } from './PrevNextButtons';
import { Numbers } from './Numbers';
import { useState } from 'react';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  const [currentIndex /*, setCurrentIndex */] = useState(2);

  return (
    <>
      <div>
        <Text text={items[currentIndex]} />
      </div>
      <div>
        <PrevNextButtons text="Prev" />
      </div>
      <Numbers length={items.length} index={currentIndex} />
      <div>
        <PrevNextButtons text="Next" />
      </div>
    </>
  );
}
