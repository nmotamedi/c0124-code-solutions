export function findMissingNumber(arr: number[]): number | undefined {
  const fullSum = ((arr.length + 1) * (arr.length + 1 + 1)) / 2;
  let sum = 0;
  for (const number of arr) {
    sum += number;
  }
  return fullSum - sum;
}
