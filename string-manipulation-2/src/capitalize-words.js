'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let capitalizedWords = '';
  capitalizedWords += string[0].toUpperCase();
  for (let n = 1; n < string.length; n++) {
    if (string[n - 1] === ' ') {
      capitalizedWords += string[n].toUpperCase();
    } else {
      capitalizedWords += string[n].toLowerCase();
    }
  }
  return capitalizedWords;
}
