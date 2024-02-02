'use strict';
/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  for (let n = array.length - 1; n >= 0; n--) {
    reversedArray.push(array[n]);
  }
  return reversedArray;
}
