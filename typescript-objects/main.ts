interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Nader',
  lastName: 'Motamedi',
  age: 28,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Talent Manager';

console.log('livesInIrvine ', student.livesInIrvine);
console.log('previousOccupation ', student.previousOccupation);
console.log(student);

const vehicle: Vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2019,
};

vehicle['color'] = 'navy';
vehicle['isConvertible'] = false;

console.log('color', vehicle['color']);
console.log('isConvertible', vehicle['isConvertible']);
console.log('vehicle object ', vehicle);

const pet: Pet = {
  name: 'Mystic',
  kind: 'Black Cat',
};

delete pet.name;
delete pet.kind;

console.log('pet', pet);
