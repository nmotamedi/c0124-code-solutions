'use strict';
/* exported pick */
function pick(source, keys) {
  const pickedObjects = {};
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
