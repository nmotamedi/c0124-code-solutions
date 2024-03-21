import { FaPause, FaPlay } from 'react-icons/fa';
import './Stopwatch.css';

type Props = {
  count: number;
  pauseState: boolean;
  onIconClick: () => void;
  onFaceClick: () => void;
};

export function Stopwatch({
  count,
  pauseState,
  onIconClick,
  onFaceClick,
}: Props) {
  return (
    <div>
      <h1 onClick={onFaceClick}>{count}</h1>
      {!pauseState ? (
        <FaPlay onClick={onIconClick} />
      ) : (
        <FaPause onClick={onIconClick} />
      )}
    </div>
  );
}
