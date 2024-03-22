type Props = {
  text: string;
  onClickHandler?: () => void;
};

export function PrevNextButtons({ text, onClickHandler }: Props) {
  return <button onClick={onClickHandler}>{text}</button>;
}
