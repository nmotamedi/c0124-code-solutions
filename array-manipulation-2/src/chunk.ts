/* exported chunk */
function chunk(array: unknown[], size: number): unknown[][] | unknown[] {
  const chunky: unknown[][] | unknown[] = [];
  let innerChunky: unknown[] = [];
  if (array.length === 0) {
    return chunky;
  } else {
    for (let n = 0; n < array.length; n++) {
      innerChunky.push(array[n]);
      if ((n + 1) % size === 0) {
        chunky.push(innerChunky);
        innerChunky = [];
      }
    }
    if (innerChunky.length > 0) {
      chunky.push(innerChunky);
    }
    return chunky;
  }
}
