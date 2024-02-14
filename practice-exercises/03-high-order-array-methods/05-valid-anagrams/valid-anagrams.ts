// Not equal to what the given solution is
export function validAnagrams(str1: string, str2: string): boolean {
  const arr1: string[] = str1.split('');
  const arr2: string[] = str2.split('');
  const str1sort = arr1.sort().join();
  const str2sort = arr2.sort().join();
  if (str1sort === str2sort) {
    return true;
  } else {
    return false;
  }
}
