'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
  }
  return sum;
}
