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
  return queue.dequeue();
}

export function takeSmaller(queue: Queue<number>): number | undefined {
  if (queue.peek() !== undefined) {
    const top = queue.dequeue();
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      if (top === undefined || second === undefined)
        throw new Error('This will never happen');
      if (top <= second) {
        queue.enqueue(second);
        return top;
      } else {
        queue.enqueue(top);
        return second;
      }
    } else {
      return top;
    }
  } else {
    return undefined;
  }
}

export function takeNextSmallest(
  numberQueue: Queue<number>
): number | undefined {
  if (numberQueue.peek() !== undefined) {
    let top = numberQueue.dequeue();
    if (numberQueue.peek() !== undefined) {
      let second = numberQueue.peek();
      if (top === undefined || second === undefined)
        throw new Error('This will never happen');
      while (top !== undefined && second !== undefined && top > second) {
        numberQueue.enqueue(top);
        top = numberQueue.dequeue();
        second = numberQueue.peek();
      }
      return top;
    } else {
      return top;
    }
  } else {
    return undefined;
  }
}
