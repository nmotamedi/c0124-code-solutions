'use strict';
const array = [
  {
    isbn: '23344500576',
    title: 'Tomorrow and Tomorrow...',
    author: 'Gabrielle LastName',
  },
  { isbn: '74747474747474', title: 'Steve Jobs', author: 'Walter Isaacson' },
  { isbn: '123434322', title: 'Elon Musk', author: 'Walter Isaacson' },
];
console.log('Array of books: ', array);
console.log('type of array: ', typeof array);
const booksJSON = JSON.stringify(array);
console.log('booksJSON: ', booksJSON);
console.log('type of booksJSON: ', typeof booksJSON);
const studentJSON = '[{"Number id":2302, "String name":"Nader Motamedi"}]';
console.log('studentJSON: ', studentJSON);
console.log('type of studentJSON: ', typeof studentJSON);
const studentObj = JSON.parse(studentJSON);
console.log('studentObj: ', studentObj);
console.log('type of studentObj: ', typeof studentObj);
