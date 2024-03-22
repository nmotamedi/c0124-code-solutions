import './Numbers.css';

type Props = {
  length: number;
  index: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Numbers({ length, index, onClick }: Props) {
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
}
