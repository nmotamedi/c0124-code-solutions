/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] | undefined {
  if (numbers.length === 0) return undefined;
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  if (amount < 0) {
    const negArray = String(amount).split('-');
    return `-$${Number(negArray[1]).toFixed(2)}`;
  }
  return `$${amount.toFixed(2)}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(
  numbers: number[],
  divisor: number
): number[] | undefined {
  if (numbers.length === 0 || divisor === 0) {
    return undefined;
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] / divisor;
  }
  return numbers;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> | undefined {
  const result: Record<string, unknown> = {};
  if (
    Object.values(obj)[0] === undefined ||
    Object.values(obj)[0] === null ||
    typeof Object.values(obj)[0] === 'string'
  )
    return undefined;
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = Number(value) * multiplier;
  });
  return result;
}
