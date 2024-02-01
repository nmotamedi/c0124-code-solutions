'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddEvenArray = [];
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {
      oddEvenArray.push('even');
    } else {
      oddEvenArray.push('odd');
    }
  }
  return oddEvenArray;
}
