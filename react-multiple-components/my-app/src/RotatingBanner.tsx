import { Text } from './Text';
import { PrevNextButtons } from './PrevNextButtons';
import { Numbers } from './Numbers';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  return (
    <>
      <div>
        <Text text={items[0]} />
      </div>
      <div>
        <PrevNextButtons text="Prev" />
      </div>
      <Numbers length={items.length} index={0} />
      <div>
        <PrevNextButtons text="Next" />
      </div>
    </>
  );
}
