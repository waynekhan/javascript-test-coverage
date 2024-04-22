const math = require('../src/math'); // Import the math module

test('adds two numbers correctly', () => {
  expect(math.addNumbers(2, 3)).toBe(5);
  expect(math.addNumbers(10, -5)).toBe(5);
});

test('subtracts two numbers correctly', () => {
  expect(math.subtractNumbers(10, 5)).toBe(5);
  expect(math.subtractNumbers(5, 10)).toBe(-5);
});
