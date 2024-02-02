/* exported initial */
function initial(array: unknown[]): unknown[] {
  const initialArray: unknown[] = [];
  for (let n = 0; n < array.length - 1; n++) {
    initialArray.push(array[n]);
  }
  return initialArray;
}
