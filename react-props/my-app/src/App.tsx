import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imgSrc = '/starry-sky.jpeg';
const imgText = 'A beautiful Image of Space';
const imgDescription =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in';
const buttonText = 'Click For Next Image';

function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imgSrc} />
      <ImageCaption text={imgText} />
      <ImageDescription text={imgDescription} />
      <ButtonContainer text={buttonText} />
    </>
  );
}

export default App;
