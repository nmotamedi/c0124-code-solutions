export function numberRange(startNum: number, endNum: number): number[] {
  if (startNum === endNum) {
    return [endNum];
  }
  const numberArr = numberRange(startNum, endNum - 1);
  numberArr.push(endNum);
  return numberArr;
}
