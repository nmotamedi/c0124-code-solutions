/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  for (let n = 0; n < word.length; n++) {
    if (word[n] !== word[n].toUpperCase()) {
      return false;
    }
  }
  return true;
}
