'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (let n = 0; n < vowels.length; n++) {
    if (char.toLowerCase() === vowels[n]) {
      return true;
    }
  }
  return false;
}
