type Prop = {
  image: {
    src: string;
    alt: string;
  };
};

export function Carousel({ image }: Prop) {
  return <img src={image.src} alt={image.alt} />;
}
