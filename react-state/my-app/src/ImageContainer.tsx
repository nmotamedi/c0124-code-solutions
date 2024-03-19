import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index + 1 >= imageSrc.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[index]}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
