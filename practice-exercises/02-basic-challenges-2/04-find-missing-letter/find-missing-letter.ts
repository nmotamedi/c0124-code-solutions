export function findMissingLetter(arr: string[]): string | undefined {
  const letter: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let previousIndex = 0;
  let index = 0;
  for (const letters of arr) {
    index = letter.indexOf(letters);
    if (index - previousIndex === 2) {
      return letter[index - 1];
    }
    previousIndex = index;
  }
}
