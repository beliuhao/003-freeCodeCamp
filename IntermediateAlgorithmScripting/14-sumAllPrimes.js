let isPrime = function(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(num) {
  let sum = 0;
  for(let j = 2; j <= num; j++) {
    if(isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

sumPrimes(10);
