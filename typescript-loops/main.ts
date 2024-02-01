/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let repeated = '';
  let count = 1;
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string: string): void {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
