function capitalize(str) {
	return str.slice(0,1).toUpperCase() + str.slice(1);
}

function reverse(str) {
	return str.split('').reverse().join('');
}

const calculator = {
	add(a, b) {
		return a + b;
	},
	
	subtract(a, b) {
		return a - b;
	},
	
	divide(a, b) {
		if (b === 0) return NaN;
		return a / b;
	},
	
	multiply(a, b) {
		return a * b;
	},
}

function caesarCipher(str, shift) {
	const normalizedShift = (shift % 26 + 26) % 26;
	
	return str.split('').map(char => {
						const code = char.charCodeAt(0);
						
						if (code >= 65 && code <= 90) {
							return String.fromCharCode((code - 65 + normalizedShift) % 26 + 65);
						}
						
						if (code >= 97 && code <= 122) {
							return String.fromCharCode((code - 97 + normalizedShift) % 26 + 97);
						}
						
						return char;
				 }).join('');
}

function analyzeArray(arr) {
	arr.sort((a,b) => a - b);
	const sum = arr.reduce((acc, val) => acc + val, 0);
	const min = arr[0];
	const max = arr[arr.length - 1];
	const average = sum / arr.length;
	const length = arr.length;
	
	return { min, max, average, length }; 
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray }
