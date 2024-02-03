/* exported firstChars */
function firstChars(length: number, string: string): string {
  let firstString: string = '';
  for (let n = 0; n < length && n < string.length; n++) {
    firstString += string[n];
  }
  return firstString;
}
