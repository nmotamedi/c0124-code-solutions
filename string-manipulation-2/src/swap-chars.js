'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let swappedWord = '';
  for (let n = 0; n < string.length; n++) {
    if (n === firstIndex) {
      swappedWord += string[secondIndex];
    } else if (n === secondIndex) {
      swappedWord += string[firstIndex];
    } else {
      swappedWord += string[n];
    }
  }
  return swappedWord;
}
