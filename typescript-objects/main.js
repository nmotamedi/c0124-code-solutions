'use strict';
const student = {
  firstName: 'Nader',
  lastName: 'Motamedi',
  age: 28,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Talent Manager';
console.log('livesInIrvine ', student.livesInIrvine);
console.log('previousOccupation ', student.previousOccupation);
console.log(student);
const vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2019,
};
vehicle['color'] = 'navy';
vehicle['isConvertible'] = false;
console.log('color', vehicle['color']);
console.log('isConvertible', vehicle['isConvertible']);
console.log('vehicle object ', vehicle);
const pet = {
  name: 'Mystic',
  kind: 'Black Cat',
};
delete pet.name;
delete pet.kind;
console.log('pet', pet);
