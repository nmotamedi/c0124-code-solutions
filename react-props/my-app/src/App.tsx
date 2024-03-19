import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText: string = 'React Image Bank';
const imgSRC: string = '/starry-sky.jpeg';
const imgText: string = 'A beautiful Image of Space';
const imgDescription: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in';
const buttonText: string = 'Click For Next Image';

function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imgSRC} />
      <ImageCaption text={imgText} />
      <ImageDescription text={imgDescription} />
      <ButtonContainer text={buttonText} />
    </>
  );
}

export default App;
