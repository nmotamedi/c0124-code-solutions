export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const combArray: unknown[] = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      combArray.push(element);
    }
  }
  return combArray;
}
