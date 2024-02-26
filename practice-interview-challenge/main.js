'use strict';
function getRangeReport(start, end) {
  const range = [];
  let total = 0;
  const odds = [];
  const evens = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
    total += i;
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  const average = total / range.length;
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
