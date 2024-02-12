'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let filtered = [];
  if (count > array.length) {
    filtered = array;
  } else {
    for (let n = array.length - count; n < array.length; n++) {
      filtered.push(array[n]);
    }
  }
  return filtered;
}
