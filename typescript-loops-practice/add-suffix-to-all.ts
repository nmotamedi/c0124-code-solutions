/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const suffixedArray: string[] = [];
  for (let n = 0; n < words.length; n++) {
    suffixedArray.push(words[n] + suffix);
  }
  return suffixedArray;
}
