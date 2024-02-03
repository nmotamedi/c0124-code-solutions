'use strict';
/* exported invert */
function invert(source) {
  const invertedObj = {};
  for (const key in source) {
    invertedObj[source[key]] = key;
  }
  return invertedObj;
}
