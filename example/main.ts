function pairSum(array: number[], sum: number): boolean {
  for (let n = 0; n < array.length; n++) {
    if (array.includes(sum - array[n]) && array[n] !== sum - array[n]) {
      return true;
    }
  }
  return false;
}

console.log('Test 1', pairSum([1, 2, 3, 4], 8));
console.log('Test 2', pairSum([1, 2, 3, 4], 3));
console.log('Test 2', pairSum([1, 2, 3, 4], 4));
