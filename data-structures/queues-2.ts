/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  const first = queue.dequeue();
  if (first !== undefined) {
    queue.enqueue(first);
  }
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  const first = queue.dequeue();
  if (first !== undefined) {
    queue.enqueue(first);
  }
  return queue.dequeue();
}
