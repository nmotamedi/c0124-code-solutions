/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function get2ndFromTop<T>(stack: Stack<T>): T | undefined {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const top = stack.pop();
  if (stack.peek() === undefined) {
    if (top === undefined) throw new Error('This will never happen');
    stack.push(top);
    return undefined;
  }
  const retValue = stack.peek();
  if (top === undefined) throw new Error('This will never happen');
  stack.push(top);
  return retValue;
}

export function insertUnderTop<T>(stack: Stack<T>, value: T): void {
  if (stack.peek() !== undefined) {
    const top = stack.pop();
    stack.push(value);
    if (top === undefined) throw new Error('This will never happen');
    stack.push(top);
  }
}
