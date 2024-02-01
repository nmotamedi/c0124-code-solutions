/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const oddEvenArray: string[] = [];
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {
      oddEvenArray.push('even');
    } else {
      oddEvenArray.push('odd');
    }
  }
  return oddEvenArray;
}
