/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: Person): string {
  const fullName: string = person.firstName + ' ' + person.lastName;
  return fullName;
}
