'use strict';
const heroes = ['hulk', 'rocketeer', 'iron man', 'captain underpants'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);
const library = [
  { title: 'Tomorrow and Tomorrow and Tomorrow...', author: 'Gabrielle Zevin' },
  { title: 'Steve Jobs', author: 'Walter Isaacson' },
  { title: 'Elon Musk', author: 'Walter Isaacson' },
];
const lastBook = library.pop();
console.log('lastBook', lastBook);
const firstBook = library.shift();
console.log('firstBook', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Remaining library', library);
const fullName = 'Heisenberg White';
const firstAndLastName = fullName.split(' ');
console.log('firstNameLastName', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name: ', sayMyName);
const employee = {
  name: 'Jim',
  age: 28,
  position: 'Paper Salesman',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employee values', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs', employeePairs);
