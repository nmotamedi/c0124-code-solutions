/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const filtered: unknown[] = [];
  for (let n = count; n < array.length; n++) {
    filtered.push(array[n]);
  }
  return filtered;
}
