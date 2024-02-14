export function sumOfEvenSquares(numbers: number[]): number {
  const evenNumbers: number[] = numbers.filter((num: number) => {
    return num % 2 === 0;
  });
  const squares: number[] = evenNumbers.map((num: number) => {
    return num ** 2;
  });
  const total: number = squares.reduce((total: number, num: number) => {
    return total + num;
  }, 0);
  return total;
}
