export function findMissingLetter(arr: string[]): string {
  const charArr = arr.map((letter: string) => {
    return letter.charCodeAt(0);
  });
  const upperLetter = charArr.find(
    (value: number, index: number) =>
      index !== 0 && value - charArr[index - 1] === 2
  );
  const missingLetter = String.fromCharCode(upperLetter! - 1);
  console.log(missingLetter);
  return missingLetter;
}
