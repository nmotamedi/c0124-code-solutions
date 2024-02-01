interface Book {
  title: string;
  author: string;
}

const heroes: string[] = [
  'hulk',
  'rocketeer',
  'iron man',
  'captain underpants',
];

let randomNumber: number = Math.random();
randomNumber *= heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

const library: Book[] = [
  { title: 'Tomorrow and Tomorrow and Tomorrow...', author: 'Gabrielle Zevin' },
  { title: 'Steve Jobs', author: 'Walter Isaacson' },
  { title: 'Elon Musk', author: 'Walter Isaacson' },
];
const lastBook: Book | undefined = library.pop();
console.log('lastBook', lastBook);
const firstBook: Book | undefined = library.shift();
console.log('firstBook', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Remaining library', library);

const fullName: string = 'Heisenberg White';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstNameLastName', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('Say My Name: ', sayMyName);

const employee: { name: string; age: number; position: string } = {
  name: 'Jim',
  age: 28,
  position: 'Paper Salesman',
};
const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys', employeeKeys);
const employeeValues: unknown[] = Object.values(employee);
console.log('employee values', employeeValues);
const employeePairs: unknown[] = Object.entries(employee);
console.log('employeePairs', employeePairs);
