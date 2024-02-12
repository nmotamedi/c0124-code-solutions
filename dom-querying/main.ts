console.log('Hello World');

const $h1 = document.querySelector('h1');
console.log('$h1 dir:');
console.dir($h1);
const $explanation: unknown = document.querySelector('#explanation');
console.log('$explanation dir:');
console.dir($explanation);
const $hint: unknown = document.querySelector('.hint');
console.log('$hint dir:');
console.dir($hint);
const $multiP: unknown = document.querySelectorAll('p');
console.log('$multiP dir:');
console.dir($multiP);
const $exampleLinks: unknown = document.querySelectorAll('.example\\-link');
console.log('$exampleLinks dir:');
console.dir($exampleLinks);
