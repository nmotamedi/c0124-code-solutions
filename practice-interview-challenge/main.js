'use strict';
function getRangeReport(start, end) {
  // setting range
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  // setting total
  const total = range.reduce((total, num) => total + num);
  // setting average
  const average = total / range.length;
  // setting odds and evens
  const odds = [];
  const evens = [];
  range.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  const rangeReport = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return rangeReport;
}
console.log('range 1, 10', getRangeReport(1, 10));
console.log('range 1, 5', getRangeReport(1, 5));
