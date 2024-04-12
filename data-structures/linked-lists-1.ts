/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getHead<T>(list: LinkedList<T>): T | null {
  return list.data;
}

export function updateHead<T>(list: LinkedList<T>, value: T | null): void {
  list.data = value;
}

export function withoutHead<T>(list: LinkedList<T>): LinkedList<T> | null {
  const headlessList = list.next;
  return headlessList;
}

export function prepend<T>(list: LinkedList<T>, value: T): LinkedList<T> {
  const prependedList = new LinkedList(value);
  prependedList.next = list;
  return prependedList;
}
