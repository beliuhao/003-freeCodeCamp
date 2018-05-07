let generateFib = function(num) {
    if(num === 1) {
      return [1];
    } else if(num === 2) {
      return [1, 1];
    } else {
      let fib = [1, 1];
      while(fib[fib.length-1] + fib[fib.length-2] <= num) {
        fib.push(fib[fib.length-1] + fib[fib.length-2]);
      }
      return fib;
    }
};

function sumFibs(num) {
  let fib = generateFib(num);
  let result = 0;
  result = fib.reduce(function(accumulator, next) {
    return (next % 2 === 1) ? (accumulator + next) : accumulator;
  }, 0);
  return result;
}

sumFibs(4);