/* exported numVowels */
function numVowels(string: string): number {
  let count = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (let n = 0; n < string.length; n++) {
    if (vowels.includes(string[n].toLowerCase())) {
      count += 1;
    }
  }
  return count;
}
