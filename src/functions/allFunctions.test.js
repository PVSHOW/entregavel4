const sunFunc = require('./sunFunc');
const primeFunc = require('./primeFunc');
const contFunc = require('./contFunc');
const fibonacciFunc = require('./fibonacciFunc');
const mdcFunc = require('./mdcFunc');
const quicksortFunc = require('./quicksortFunc');

test('sunFunc 10+20 = 30', () => {
  expect(sunFunc(10, 20)).toBe(30);
});

test('sunFunc -10+20 = 10', () => {
  expect(sunFunc(-10, 20)).toBe(10);
});

test('primeFunc 10 = false', () => {
  expect(primeFunc(10)).toBe(false);
});

test('primeFunc 3 = true', () => {
  expect(primeFunc(3)).toBe(true);
});

test('contFunc 10 = true (tem dígito par)', () => {
  expect(contFunc(10)).toBe(true);
});

test('contFunc 3 = false', () => {
  expect(contFunc(3)).toBe(false);
});

test('fibonacciFunc 5 = [0,1,1,2,3]', () => {
  expect(fibonacciFunc(5)).toEqual([0, 1, 1, 2, 3]);
});

test('fibonacciFunc 1 = [0]', () => {
  expect(fibonacciFunc(1)).toEqual([0]);
});

test('mdcFunc 5,10 = 5', () => {
  expect(mdcFunc(5, 10)).toBe(5);
});

test('mdcFunc 1,1 = 1', () => {
  expect(mdcFunc(1, 1)).toBe(1);
});

test('quicksortFunc [5,4,3,1] = [1,3,4,5]', () => {
  expect(quicksortFunc([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('quicksortFunc [100,4,3,150] = [3,4,100,150]', () => {
  expect(quicksortFunc([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});