type Prop = {
  image: {
    src: string;
    alt: string;
  };
};

export function Image({ image }: Prop) {
  return <img src={image.src} alt={image.alt} />;
}
