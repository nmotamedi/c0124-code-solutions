type captionProp = {
  text: string;
};

export function ImageCaption({ text }: captionProp) {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
}
