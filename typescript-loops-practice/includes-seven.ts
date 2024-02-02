/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === 7) {
      return true;
    }
  }
  return false;
}
