export function fibonacci(num: number): number {
  if (num === 0 || num === 1) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(6));
