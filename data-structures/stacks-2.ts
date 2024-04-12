import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let highestNumber = stack.peek();
  while (stack.peek() !== undefined) {
    const number = stack.pop();
    if (number === undefined || highestNumber === undefined)
      throw new Error('this will never happen');
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  if (highestNumber === undefined) throw new Error('this will never happen');
  return highestNumber;
}
