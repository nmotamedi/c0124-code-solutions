export function power(base: number, exponent: number): number {
  if (exponent === 1) {
    return base;
  }
  return base * power(base, exponent - 1);
}
