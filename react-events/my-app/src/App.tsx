import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import { useState } from 'react';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';

export function App() {
  const [imageIndex, setIndex] = useState(0);
  function handleButtonClick() {
    if (imageIndex + 1 >= imageSrc.length) setIndex(0);
    else setIndex(imageIndex + 1);
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc[imageIndex]} />
      <ImageCaption imageCap={imageCap[imageIndex]} />
      <ImageDescription imageDescrip={imageDescrip[imageIndex]} />
      <ButtonContainer
        onButtonClick={handleButtonClick}
        buttonText={buttonText}
      />
    </>
  );
}
