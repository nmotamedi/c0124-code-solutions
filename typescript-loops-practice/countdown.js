'use strict';
/* exported countdown */
function countdown(number) {
  const numberCountdown = [];
  while (number >= 0) {
    numberCountdown.push(number);
    number--;
  }
  return numberCountdown;
}
