'use strict';
/* exported take */
function take(array, count) {
  const taken = [];
  if (array.length === 0) {
    return taken;
  } else {
    for (let n = 0; n < count && n < array.length; n++) {
      taken.push(array[n]);
    }
  }
  return taken;
}
