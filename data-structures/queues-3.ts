import { Queue } from './lib/queue';

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (index > 0) {
    const front = queue.dequeue();
    if (front === undefined) throw new Error('This will never happen');
    queue.enqueue(front);
    index--;
  }
  return queue.peek();
}

export function takeSmaller(queue: Queue<number>): number | undefined {
  return undefined;
}

export function takeNextSmallest(
  numberQueue: Queue<number>
): number | undefined {
  return undefined;
}
