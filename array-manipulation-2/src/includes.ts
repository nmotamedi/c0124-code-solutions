/* exported includes */
function includes(array: unknown[], value: unknown): boolean {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === value) {
      return true;
    }
  }
  return false;
}
