interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}

console.log('convert 60 minutes to seconds: ', convertMinutesToSeconds(60));

function greet(name: string): string {
  const greeting: string = 'Hey ' + name + '!';
  return greeting;
}

console.log('Greeting for Tim: ', greet('Tim'));

const getArea = (width: number, height: number): number => {
  const area: number = width * height;
  return area;
};

console.log('Area of width 4 and height 5: ', getArea(4, 5));

const getFirstName = (person: Person): string => {
  const firstN: string = person.firstName;
  return firstN;
};

console.log(
  'First name of Tim Jimbo: ',
  getFirstName({ firstName: 'Tim', lastName: 'Jimbo' })
);

const getLastElement = (array: unknown[]): unknown => {
  const lastElement: unknown = array[array.length - 1];
  return lastElement;
};

console.log('Last value in array A, B, C: ', getLastElement(['A', 'B', 'C']));

function callOtherFunction(
  otherFunction: any,
  param1: unknown,
  param2?: unknown
): unknown {
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
