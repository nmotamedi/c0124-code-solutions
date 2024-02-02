'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (let n = word.length - 1; n >= 0; n--) {
    reversed += word[n];
  }
  return reversed;
}
