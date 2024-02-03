'use strict';
/* exported numVowels */
function numVowels(string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let n = 0; n < string.length; n++) {
    if (vowels.includes(string[n].toLowerCase())) {
      count += 1;
    }
  }
  return count;
}
