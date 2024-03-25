import './Numbers.css';

type Props = {
  length: number;
  index: number;
  onClick: (i: number) => void;
};

export function NumButtons({ length, index, onClick }: Props) {
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
      <button key={i} onClick={() => onClick(i)} className={className}>
        {num}
      </button>
    );
  });
  return <div>{numButtons}</div>;
}
