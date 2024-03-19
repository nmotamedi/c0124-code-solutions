export function factorial(num: number): number {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
