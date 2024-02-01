'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === 7) {
      return true;
    }
  }
  return false;
}
