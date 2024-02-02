'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredValues = [];
  for (let n = 0; n < values.length; n++) {
    if (values[n] !== null) {
      filteredValues.push(values[n]);
    }
  }
  return filteredValues;
}
