'use strict';
const $h1 = document.querySelector('h1');
function hello() {
  if (!$h1) throw new Error('$h1 query failed');
  $h1.textContent = 'Hello There';
}
setTimeout(hello, 2000);
