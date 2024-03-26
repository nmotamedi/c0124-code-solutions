import { FaCircleDot } from 'react-icons/fa6';

type Props = {
  num: number;
  index: number;
  onClick: (i: number) => void;
};

export function Buttons({ num, index, onClick }: Props) {
  const buttonsArray = [];
  for (let i = 0; i < num; i++) {
    let className = '';
    if (i === index) {
      className = 'light';
    }
    const button = (
      <FaCircleDot key={i} className={className} onClick={() => onClick(i)} />
    );
    buttonsArray.push(button);
  }

  return <>{buttonsArray}</>;
}
