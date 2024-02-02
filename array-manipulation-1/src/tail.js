'use strict';
/* exported tail */
function tail(array) {
  const tailArray = [];
  for (let n = 1; n < array.length; n++) {
    tailArray.push(array[n]);
  }
  return tailArray;
}
