type Prop = {
  text: string;
};

export function Text({ text }: Prop) {
  return <h1>{text}</h1>;
}
