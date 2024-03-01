export function sumUpTo(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  return n + sumUpTo(n - 1);
}
