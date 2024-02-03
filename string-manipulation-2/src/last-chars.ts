/* exported lastChars */
function lastChars(length: number, string: string): string {
  let lastString: string = '';
  for (let n = string.length - length; n < string.length; n++) {
    if (n >= 0) {
      lastString += string[n];
    }
  }
  return lastString;
}
