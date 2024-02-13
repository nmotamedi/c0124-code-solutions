export function areAllCharactersUnique(str: string): boolean {
  let newStr = '';
  for (const letter of str) {
    if (!newStr.includes(letter)) {
      newStr += letter;
    } else {
      return false;
    }
  }
  return true;
}
