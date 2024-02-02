'use strict';
/* exported initial */
function initial(array) {
  const initialArray = [];
  for (let n = 0; n < array.length - 1; n++) {
    initialArray.push(array[n]);
  }
  return initialArray;
}
