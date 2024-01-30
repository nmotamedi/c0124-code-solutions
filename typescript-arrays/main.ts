const colors: string[] = ['red', 'white', 'blue'];

console.log('value at colors[0]', colors[0]);
console.log('value at colors[1]', colors[1]);
console.log('value at colors[2]', colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log(colors);

const students: string[] = ['albert', 'bob', 'charles', 'dave'];

const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} in the class`);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students', students);
