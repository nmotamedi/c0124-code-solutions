/* exported tail */
function tail(array: unknown[]): unknown[] {
  const tailArray: unknown[] = [];
  for (let n = 1; n < array.length; n++) {
    tailArray.push(array[n]);
  }
  return tailArray;
}
