import './Numbers.css';

type Props = {
  text?: string;
  length?: number;
  index?: number;
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);
};

export function Buttons({ length, index, onClick, text }: Props) {
  if (length) {
    const numArr = [];
    for (let i = 0; i < length; i++) {
      numArr.push(i);
    }
    const numButtons = numArr.map((num, i) => {
      let className: string = '';
      if (i === index) {
        className = 'blue';
      }
      return (
        <button key={i} onClick={onClick} className={className}>
          {num}
        </button>
      );
    });
    return <div>{numButtons}</div>;
  } else if (text) {
    return <button onClick={onClick}>{text}</button>;
  }
}
