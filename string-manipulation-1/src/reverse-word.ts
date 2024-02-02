/* exported reverseWord */
function reverseWord(word: string): string {
  let reversed: string = '';
  for (let n = word.length - 1; n >= 0; n--) {
    reversed += word[n];
  }
  return reversed;
}
