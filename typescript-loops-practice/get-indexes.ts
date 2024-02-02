/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const indexArray: number[] = [];
  for (let n = 0; n < array.length; n++) {
    indexArray.push(n);
  }
  return indexArray;
}
