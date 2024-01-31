'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('convert 60 minutes to seconds: ', convertMinutesToSeconds(60));
function greet(name) {
  const greeting = 'Hey ' + name + '!';
  return greeting;
}
console.log('Greeting for Tim: ', greet('Tim'));
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
console.log('Area of width 4 and height 5: ', getArea(4, 5));
const getFirstName = (person) => {
  const firstN = person.firstName;
  return firstN;
};
console.log(
  'First name of Tim Jimbo: ',
  getFirstName({ firstName: 'Tim', lastName: 'Jimbo' })
);
const getLastElement = (array) => {
  const lastElement = array[array.length - 1];
  return lastElement;
};
console.log('Last value in array A, B, C: ', getLastElement(['A', 'B', 'C']));
function callOtherFunction(otherFunction, param1, param2) {
  return otherFunction(param1, param2);
}
console.log(
  'callFunction convertMinutes with param 5: ',
  callOtherFunction(convertMinutesToSeconds, 5)
);
console.log(
  'callFunction greet with param Nader: ',
  callOtherFunction(greet, 'Nader')
);
console.log(
  'callFunction getArea with params 6, 7',
  callOtherFunction(getArea, 6, 7)
);
console.log(
  'callFunction getFirstName with param John Samuels: ',
  callOtherFunction(getFirstName, { firstName: 'John', lastName: 'Samuels' })
);
console.log(
  'callFunction getLastElement with param Apples, Bananas, Carrots: ',
  callOtherFunction(getLastElement, ['apples', 'bananas', 'carrots'])
);
