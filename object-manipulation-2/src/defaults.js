'use strict';
/* exported defaults */
function defaults(target, source) {
  const targetKeys = [];
  for (const keys in target) {
    targetKeys.push(keys);
  }
  for (const keys in source) {
    if (!targetKeys.includes(keys)) {
      target[keys] = source[keys];
    }
  }
  return target;
}
