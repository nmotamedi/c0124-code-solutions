'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  for (let n = 0; n < word.length; n++) {
    if (word[n] !== word[n].toLowerCase()) {
      return false;
    }
  }
  return true;
}
