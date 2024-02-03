/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  let cappedWord: string = '';
  cappedWord += word[0].toUpperCase();
  for (let n = 1; n < word.length; n++) {
    if (word.toLowerCase() === 'javascript' && n === 4) {
      cappedWord += word[n].toUpperCase();
    } else {
      cappedWord += word[n].toLowerCase();
    }
  }
  return cappedWord;
}
