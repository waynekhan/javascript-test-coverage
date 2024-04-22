const math = require('../src/math'); // Import the math module

test('adds two numbers correctly', () => {
  expect(math.addNumbers(2, 3)).toBe(5);
  expect(math.addNumbers(10, -5)).toBe(5);
});

test('subtracts two numbers correctly', () => {
  expect(math.subtractNumbers(10, 5)).toBe(5);
  expect(math.subtractNumbers(5, 10)).toBe(-5);
});

test('calculates something', () => {
   const num1 = 10;
   const num2 = 5;
   // Missing assertion to check the result
});
