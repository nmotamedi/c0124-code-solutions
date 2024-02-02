/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const reversedArray: unknown[] = [];
  for (let n = array.length - 1; n >= 0; n--) {
    reversedArray.push(array[n]);
  }
  return reversedArray;
}
