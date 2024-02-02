'use strict';
/* exported compact */
function compact(array) {
  const compactArray = [];
  for (let n = 0; n < array.length; n++) {
    if (array[n]) {
      compactArray.push(array[n]);
    }
  }
  return compactArray;
}
