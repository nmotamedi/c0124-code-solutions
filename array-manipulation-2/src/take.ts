/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const taken: unknown[] = [];
  if (array.length === 0) {
    return taken;
  } else {
    for (let n = 0; n < count && n < array.length; n++) {
      taken.push(array[n]);
    }
  }
  return taken;
}
