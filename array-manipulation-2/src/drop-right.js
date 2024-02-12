'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const filtered = [];
  for (let n = 0; n < array.length - count; n++) {
    filtered.push(array[n]);
  }
  return filtered;
}
