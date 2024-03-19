type descriptionProp = {
  text: string;
};

export function ImageDescription({ text }: descriptionProp) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
