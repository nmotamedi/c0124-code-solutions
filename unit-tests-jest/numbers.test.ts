import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('With negative and 0 numbers should return the desired amount', () => {
    expect(evenNumbers([-4, -3, -2, -1, 0, 1, 2, 3])).toEqual([-4, -2, 0, 2]);
  });
  it('Empty array should return undefined', () => {
    expect(evenNumbers([])).toEqual(undefined);
  });
});

describe('toDollars', () => {
  it('Integers should be returning dollar amounts', () => {
    expect(toDollars(4)).toBe(`$4.00`);
  });
  it('Should account for numbers with decimals', () => {
    expect(toDollars(4.5)).toBe(`$4.50`);
  });
  it(`Should account for 0`, () => {
    expect(toDollars(0)).toBe(`$0.00`);
  });
  it(`Should account for Negative Numbers`, () => {
    expect(toDollars(-10)).toBe(`-$10.00`);
  });
});

describe('divideBy', () => {
  it('Divisor at 0 should return undefined', () => {
    expect(divideBy([1, 2, 3], 0)).toEqual(undefined);
  });
  it(`Divisor at negative or positive should work as expected`, () => {
    expect(divideBy([1, 2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
    expect(divideBy([1, 2, 3, 4], -2)).toEqual([-0.5, -1, -1.5, -2]);
  });
  it(`Array with negative number or 0 should work as expected`, () => {
    expect(divideBy([-2, 0, 2, 4], 2)).toEqual([-1, 0, 1, 2]);
  });
  it('Empty array should return undefined', () => {
    expect(divideBy([], 1)).toEqual(undefined);
  });
});

describe('multiplyBy', () => {
  it('Multiplier at 0 or negative should return exprected result', () => {
    expect(multiplyBy({ one: 1 }, 2)).toEqual({ one: 2 });
    expect(multiplyBy({ one: 1 }, 0)).toEqual({ one: 0 });
    expect(multiplyBy({ one: 1 }, -2)).toEqual({ one: -2 });
  });
  it('Record values of null/undefined/NaN should return undefined', () => {
    expect(multiplyBy({ one: 0 }, 2)).toEqual({ one: 0 });
    expect(multiplyBy({ one: undefined }, 0)).toEqual(undefined);
    expect(multiplyBy({ one: null }, -2)).toEqual(undefined);
    expect(multiplyBy({ one: 'hello' }, 0)).toEqual(undefined);
  });
});
