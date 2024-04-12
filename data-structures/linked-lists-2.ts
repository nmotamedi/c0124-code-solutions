/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1;
  let next = list.next;
  while (next !== null) {
    count++;
    next = next.next;
  }
  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  let nextItem = list.next;
  if (nextItem === null) {
    list.next = new LinkedList(value);
  } else {
    while (nextItem?.next !== null) {
      nextItem = nextItem.next;
    }
    nextItem.next = new LinkedList(value);
  }
}

export function getTail<T>(list: LinkedList<T>): T | null {
  let nextItem = list.next;
  if (nextItem === null) {
    return list.data;
  }
  while (nextItem?.next !== null) {
    nextItem = nextItem.next;
  }
  return nextItem.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  let nextItem = list.next;
  if (list.data === value) {
    return true;
  } else if (nextItem === null) {
    return false;
  }
  while (nextItem !== null) {
    if (nextItem?.data === value) {
      return true;
    }
    nextItem = nextItem.next;
  }
  return false;
}
