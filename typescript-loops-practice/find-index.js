'use strict';
/* exported findIndex */
function findIndex(array, value) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === value) {
      return n;
    }
  }
  return -1;
}
