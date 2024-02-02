'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filterArray = [];
  for (let n = 0; n < values.length; n++) {
    if (typeof values[n] !== 'string') {
      filterArray.push(values[n]);
    }
  }
  return filterArray;
}
