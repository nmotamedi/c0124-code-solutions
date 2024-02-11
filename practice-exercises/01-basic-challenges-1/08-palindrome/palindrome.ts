export function isPalindrome(str: string): boolean {
  let strCleanReverse = '';
  const strClean = str.replace(/[^a-z0-9]/gi, '');
  for (let i = strClean.length - 1; i >= 0; i--) {
    strCleanReverse += strClean[i];
  }
  if (strClean.toLowerCase() === strCleanReverse.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
