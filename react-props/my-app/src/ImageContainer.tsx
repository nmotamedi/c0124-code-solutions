import './ImageContainer.css';

type containerProp = {
  src: string;
};

export function ImageContainer({ src }: containerProp) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
