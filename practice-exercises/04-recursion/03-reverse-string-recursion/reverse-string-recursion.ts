export function reverseString(str: string): string {
  if (str === '') {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
