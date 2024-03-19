export function formatPhoneNumber(numbers: number[]): string {
  const area = numbers.slice(0, 3).join('');
  const three = numbers.slice(3, 6).join('');
  const four = numbers.slice(6).join('');
  return `(${area}) ${three}-${four}`;
}
