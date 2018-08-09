
function sumAll(arr) {
  let [min, max] = arr[0] <= arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
  let sum = 0;
  let i = min;
  while(i <= max) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumAll([1, 4]));
