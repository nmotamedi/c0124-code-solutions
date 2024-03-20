import './Button.css';

type Props = {
  onButtonClick: () => void;
  count: number;
};

export function Button({ onButtonClick, count }: Props) {
  let color = 'purple';
  if (count >= 3) {
    color = 'lavender';
  }
  if (count >= 6) {
    color = 'red';
  }
  if (count >= 9) {
    color = 'orange';
  }
  if (count >= 12) {
    color = 'yellow';
  }
  if (count >= 15) {
    color = 'white';
  }
  if (count >= 18) {
    color = 'black';
  }
  return (
    <>
      <button className={color} onClick={onButtonClick}>
        Hot Button
      </button>
      <p>{count}</p>
    </>
  );
}
