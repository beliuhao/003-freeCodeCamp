function largestOfArray(arr) {
  let maxVal = arr.reduce(function(preVal, nextVal) {
    return preVal >= nextVal ? preVal : nextVal;
  });
  return maxVal;
}


function largestOfFour(arr) {
  let maxArray = arr.map(largestOfArray);
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
