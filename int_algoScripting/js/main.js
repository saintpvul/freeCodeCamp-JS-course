//  Sum All Primes

/*

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

// Solution

function sumPrimes(num) {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  const isPrime = (num) => {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) return false;
    }
    return num > 1;
  };
  let arr = newArr.filter((x) => isPrime(x) === true);
  return arr.reduce((a, b) => a + b);
}

sumPrimes(10);
