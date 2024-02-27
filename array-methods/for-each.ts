const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order: ');
values.forEach((value: number) => {
  console.log(value);
});
console.log('Reverse order: ');
let index = 0;
values.forEach(() => {
  console.log(values[values.length - index - 1]);
  index++;
});
