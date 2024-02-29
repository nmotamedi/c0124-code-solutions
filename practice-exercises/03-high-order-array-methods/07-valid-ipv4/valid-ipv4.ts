export function isValidIPv4(input: string): boolean {
  const numbArr: string[] = input.split('.');
  if (numbArr.length !== 4) {
    return false;
  }

  const test =
    numbArr.every((val: string) => val[0] !== '0') &&
    numbArr.every((val: string) => +val <= 255);
  return test;
}
