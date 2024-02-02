'use strict';
/* exported getWords */
function getWords(string) {
  const words = [];
  let word = '';
  if (string.length === 0) return words;
  else {
    for (let n = 0; n < string.length; n++) {
      if (string[n] !== ' ') {
        word += string[n];
      } else {
        words.push(word);
        word = '';
      }
    }
    words.push(word);
    return words;
  }
}
