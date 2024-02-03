'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let firstString = '';
  for (let n = 0; n < length && n < string.length; n++) {
    firstString += string[n];
  }
  return firstString;
}
