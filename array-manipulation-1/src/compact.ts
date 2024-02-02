/* exported compact */
function compact(array: unknown[]): unknown[] {
  const compactArray: unknown[] = [];
  for (let n = 0; n < array.length; n++) {
    if (array[n]) {
      compactArray.push(array[n]);
    }
  }
  return compactArray;
}
