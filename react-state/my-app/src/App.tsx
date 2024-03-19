import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/blue-sky.webp', '/white-sky.webp'];
const imageCap = [
  'A Beautiful Image of Space',
  'A Beautiful Image of a Blue Sky',
  'A Beautiful Image of a White Sky',
];
const imageDescrip = [
  'A Beautiful Image of Space. It really is pretty, no?',
  'A Beautiful Image of a Blue Sky. It really is pretty, no?',
  'A Beautiful Image of a White Sky. It really is pretty, no?',
];
const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
