export function titleCase(str: string): string {
  let capString = '';
  capString += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      capString += str[i].toUpperCase();
    } else {
      capString += str[i].toLowerCase();
    }
  }
  return capString;
}
