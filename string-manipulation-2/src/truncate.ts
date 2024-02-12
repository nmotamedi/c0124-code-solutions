/* exported truncate */
function truncate(length: number, string: string): string {
  let truncated: string = '';
  if (string.length > 0) {
    for (let n = 0; n < length && n < string.length; n++) {
      truncated += string[n];
    }
  }
  truncated += '...';
  return truncated;
}
