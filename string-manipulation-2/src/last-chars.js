'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let lastString = '';
  for (let n = string.length - length; n < string.length; n++) {
    if (n >= 0) {
      lastString += string[n];
    }
  }
  return lastString;
}
