/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === value) {
      return n;
    }
  }
  return -1;
}
