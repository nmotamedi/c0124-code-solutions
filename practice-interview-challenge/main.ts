interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  // setting range
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  // setting total
  const total = range.reduce((total: number, num: number) => total + num);
  // setting average
  const average = total / range.length;
  // setting odds and evens
  const odds: number[] = [];
  const evens: number[] = [];
  range.forEach((num: number) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });
  const rangeReport: RangeReport = {
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
