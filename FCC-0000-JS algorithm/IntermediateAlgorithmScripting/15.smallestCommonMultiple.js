let isValidMultiple = function(m, min, max) {
  for (var i = max; i >= min; i--) {
    if (m % i !== 0) {
      return false;
    }
  }
  return true;
};

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;

  while (!isValidMultiple(multiple, min, max)) {
    multiple += max;
  }
  return multiple;
}

smallestCommons([1,5]);