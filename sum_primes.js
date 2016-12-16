/*
 Takes an integer argument and returns the sum of all
 prime numbers up to and including that number (if it's prime)
*/

function sumPrimes(num) {
	var sumOfPrimes = 0;

	if (num > 1) {
		for (var i = 3; i <= num; i++) {
			for (var j = 2; j < i; j++) {
				if (i % j === 0) { 
					break;
				}
				else if (j == i - 1) {
					sumOfPrimes += i;
				}
			}			
		}
	}

	return sumOfPrimes + 2;
}

console.log('SUM OF PRIMES ::', sumPrimes(977));