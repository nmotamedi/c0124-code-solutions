'use strict';
/* exported includes */
function includes(array, value) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === value) {
      return true;
    }
  }
  return false;
}
