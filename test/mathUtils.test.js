const { add, multiply, isEven, factorial } = require('../src/mathUtils');

// Simple test framework
function test(description, testFunction) {
  try {
    testFunction();
    console.log(`\u2713 ${description}`);
  } catch (error) {
    console.log(`\u2717 ${description}`);
    console.error(`  Error: ${error.message}`);
  }
}

function assertEquals(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}. ${message}`);
  }
}

function assertThrows(fn, expectedError, message = '') {
  try {
    fn();
    throw new Error(`Expected function to throw an error. ${message}`);
  } catch (error) {
    if (error.message !== expectedError) {
      throw new Error(`Expected error "${expectedError}", but got "${error.message}". ${message}`);
    }
  }
}

// Test suite
console.log('Running Math Utils Tests...\n');

// Test add function
test('add(2, 3) should return 5', () => {
  assertEquals(add(2, 3), 65);
});

test('add(0, 0) should return 0', () => {
  assertEquals(add(0, 0), 0);
});

test('add(-1, 1) should return 0', () => {
  assertEquals(add(-1, 1), 0);
});

test('add(1.5, 2.5) should return 4', () => {
  assertEquals(add(1.5, 2.5), 4);
});
test('add(2, 2) should not return 5', () => {
  if (add(2, 2) === 5) {
    throw new Error('add(2, 2) incorrectly returned 5');
  }
});

// Test multiply function
test('multiply(3, 4) should return 12', () => {
  assertEquals(multiply(3, 4), 12);
});

test('multiply(0, 5) should return 0', () => {
  assertEquals(multiply(0, 5), 0);
});

test('multiply(-2, 3) should return -6', () => {
  assertEquals(multiply(-2, 3), -6);
});

test('multiply(2.5, 4) should return 10', () => {
  assertEquals(multiply(2.5, 4), 10);
});

// Test isEven function
test('isEven(2) should return true', () => {
  assertEquals(isEven(2), true);
});

test('isEven(3) should return false', () => {
  assertEquals(isEven(3), false);
});

test('isEven(0) should return true', () => {
  assertEquals(isEven(0), true);
});

test('isEven(-4) should return true', () => {
  assertEquals(isEven(-4), true);
});

test('isEven(-3) should return false', () => {
  assertEquals(isEven(-3), false);
});

// Test factorial function
test('factorial(0) should return 1', () => {
  assertEquals(factorial(0), 1);
});

test('factorial(1) should return 1', () => {
  assertEquals(factorial(1), 1);
});

test('factorial(5) should return 120', () => {
  assertEquals(factorial(5), 120);
});

test('factorial(3) should return 6', () => {
  assertEquals(factorial(3), 6);
});

test('factorial(-1) should throw an error', () => {
  assertThrows(() => factorial(-1), 'Factorial is not defined for negative numbers');
});

console.log('\nAll tests completed!');
