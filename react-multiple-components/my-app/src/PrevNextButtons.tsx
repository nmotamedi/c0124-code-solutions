type Props = {
  text: string;
  onClick?: () => void;
};

export function PrevNextButtons({ text, onClick }: Props) {
  return <button onClick={onClick}>{text}</button>;
}
