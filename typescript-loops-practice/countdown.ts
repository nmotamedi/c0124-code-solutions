/* exported countdown */
function countdown(number: number): number[] {
  const numberCountdown: number[] = [];
  while (number >= 0) {
    numberCountdown.push(number);
    number--;
  }
  return numberCountdown;
}
