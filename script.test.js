import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from './script.js';

test('Capitalize first letter', () => {
	expect(capitalize('hello world')).toBe('Hello world');
});

test('Reversr string', () => {
	expect(reverse('hello world')).toBe('dlrow olleh');
});

test('adding operation', () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test('subtracting operation', () => {
	expect(calculator.subtract(2, 2)).toBe(0);
});

test('dividing operation', () => {
	expect(calculator.divide(2, 2)).toBe(1);
});

test('multiplying operation', () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test('should wrap from z to a', () => {
	expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('should keep the case', () => {
	expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('should keep punctuation', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handle negative values', () => {
	expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
});

test('handle negative values', () => {
	expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
});

test('should return min value', () => {
	expect(analyzeArray([1,2,3,4,5]).min).toBe(1);
});

test('should return max value', () => {
	expect(analyzeArray([1,2,3,4,5]).max).toBe(5);
});

test('should return average', () => {
	expect(analyzeArray([1,2,3,4,5]).average).toBe(3);
});

test('should return length', () => {
	expect(analyzeArray([1,2,3,4,5]).length).toBe(5);
});
