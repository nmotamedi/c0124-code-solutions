// Examine solution for this problem. Mine works, but isn't big O.
export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      if (str[i] !== str[i + 1]) {
        return str[i];
      }
    }
  }
}
