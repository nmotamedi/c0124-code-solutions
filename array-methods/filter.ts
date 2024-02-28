const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((num: number) => num % 2 === 0);
console.log('even numbers', evens);

const filteredNames = names.filter(
  (name: string) => !name.includes('d') && !name.includes('D')
);
console.log('No D', filteredNames);
