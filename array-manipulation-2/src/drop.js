'use strict';
/* exported drop */
function drop(array, count) {
  const filtered = [];
  for (let n = count; n < array.length; n++) {
    filtered.push(array[n]);
  }
  return filtered;
}
