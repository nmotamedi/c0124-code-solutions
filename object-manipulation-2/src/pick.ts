/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const pickedObjects: Record<string, unknown> = {};
  for (const key in source) {
    if (keys.includes(key) === true) {
      if (source[key] !== undefined) {
        pickedObjects[key] = source[key];
      }
    }
  }
  return pickedObjects;
}

console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
