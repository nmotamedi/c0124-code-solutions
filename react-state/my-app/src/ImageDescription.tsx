import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index + 1 >= imageDescrip.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[index]}</p>
    </div>
  );
}
