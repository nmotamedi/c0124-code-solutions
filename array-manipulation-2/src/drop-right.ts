/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const filtered: unknown[] = [];
  for (let n = 0; n < array.length - count; n++) {
    filtered.push(array[n]);
  }
  return filtered;
}
