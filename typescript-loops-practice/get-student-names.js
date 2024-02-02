'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const studentNames = [];
  for (let n = 0; n < students.length; n++) {
    studentNames.push(students[n]['name']);
  }
  return studentNames;
}
