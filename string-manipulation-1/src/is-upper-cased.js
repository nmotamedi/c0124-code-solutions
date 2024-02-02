'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  for (let n = 0; n < word.length; n++) {
    if (word[n] !== word[n].toUpperCase()) {
      return false;
    }
  }
  return true;
}
