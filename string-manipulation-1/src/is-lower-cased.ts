/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  for (let n = 0; n < word.length; n++) {
    if (word[n] !== word[n].toLowerCase()) {
      return false;
    }
  }
  return true;
}
