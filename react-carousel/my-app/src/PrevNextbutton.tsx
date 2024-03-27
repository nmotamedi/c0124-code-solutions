import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

type Prop = {
  isLeft: boolean;
  onClick: () => void;
};

export function PrevNextButton({ isLeft, onClick }: Prop) {
  return isLeft ? (
    <FaArrowLeft onClick={onClick} />
  ) : (
    <FaArrowRight onClick={onClick} />
  );
}
