'use strict';
/* exported truncate */
function truncate(length, string) {
  let truncated = '';
  if (string.length > 0) {
    for (let n = 0; n < length && n < string.length; n++) {
      truncated += string[n];
    }
  }
  truncated += '...';
  return truncated;
}
