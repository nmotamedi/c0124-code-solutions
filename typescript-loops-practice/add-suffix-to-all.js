'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const suffixedArray = [];
  for (let n = 0; n < words.length; n++) {
    suffixedArray.push(words[n] + suffix);
  }
  return suffixedArray;
}
