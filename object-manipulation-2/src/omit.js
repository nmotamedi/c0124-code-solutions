'use strict';
/* exported omit */
function omit(source, keys) {
  const omitted = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omitted[key] = source[key];
    }
  }
  return omitted;
}
