const width: number = 34;
const height: number = 69;
const area: number = width * height;
console.log('Value of area: ', area);
console.log('Type of area: ', typeof area);

const bill: number = 6.99;
const payment: number = 10;
const change: number = payment - bill;
console.log('Value of change: ', change);
console.log('Type of change: ', typeof change);

const quizzes: number = 75;
const midterm: number = 85;
const final: number = 95;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade: ', grade);
console.log('Type of grade: ', typeof grade);

const firstName: string = 'Nader';
const lastName: string = 'Motamedi';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName: ', fullName);
console.log('Type of fullName: ', typeof fullName);

const pH: number = 13;
const isAcidic: boolean = pH < 7;
console.log('Value of isAcidic: ', isAcidic);
console.log('Type of isAcidic: ', typeof isAcidic);

const headCount: number = 275;
const isSparta: boolean = headCount === 300;
console.log('Value of isSparta: ', isSparta);
console.log('Type of isSparta: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('Value of motto: ', motto);
console.log('Type of motto: ', typeof motto);
