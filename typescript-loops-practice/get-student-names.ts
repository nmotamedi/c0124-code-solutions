/* exported getStudentNames */
function getStudentNames(students: { name: string }[]): string[] {
  const studentNames: string[] = [];
  for (let n = 0; n < students.length; n++) {
    studentNames.push(students[n].name);
  }
  return studentNames;
}
