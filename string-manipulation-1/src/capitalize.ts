/* exported capitalize */
function capitalize(word: string): string {
  let capWord = '';
  capWord += word[0].toUpperCase();
  for (let n = 1; n < word.length; n++) {
    capWord += word[n].toLowerCase();
  }
  return capWord;
}
