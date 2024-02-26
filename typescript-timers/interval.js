'use strict';
const $countdown = document.querySelector('.countdown-display');
let count = 3;
function countdown() {
  if (!$countdown) throw new Error('$countdown query failed');
  if (count === 0) {
    clearInterval(intervalID);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $countdown.textContent = `${count}`;
  }
  count--;
}
const intervalID = setInterval(countdown, 1000);
