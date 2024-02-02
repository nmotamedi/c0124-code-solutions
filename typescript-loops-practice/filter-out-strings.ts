/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const filterArray: unknown[] = [];
  for (let n = 0; n < values.length; n++) {
    if (typeof values[n] !== 'string') {
      filterArray.push(values[n]);
    }
  }
  return filterArray;
}
