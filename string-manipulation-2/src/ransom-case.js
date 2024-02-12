'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransomString = '';
  ransomString += string[0].toLowerCase();
  for (let n = 1; n < string.length; n++) {
    if (n % 2 !== 0) {
      ransomString += string[n].toUpperCase();
    } else {
      ransomString += string[n].toLowerCase();
    }
  }
  return ransomString;
}
