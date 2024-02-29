export function generateHashtag(str: string): string | undefined {
  const arr: string[] = [...str];
  const capsArr = arr.map((letter: string, index: number) => {
    if (arr[index - 1] === ' ' || arr[index - 1] === undefined) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  const filteredArr = capsArr.filter((value: string) => value !== ' ');
  const combinedStr = filteredArr.join('');
  if (combinedStr.length === 0 || combinedStr.length > 139) {
    return undefined;
  } else {
    return `#${combinedStr}`;
  }
}
