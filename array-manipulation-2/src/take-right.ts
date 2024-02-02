/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  let filtered: unknown[] = [];
  if (count > array.length) {
    filtered = array;
  } else {
    for (let n = array.length - count; n < array.length; n++) {
      filtered.push(array[n]);
    }
  }
  return filtered;
}
