export function reverseString(str: string): string {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}
