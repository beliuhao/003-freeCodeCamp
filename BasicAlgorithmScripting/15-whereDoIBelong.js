
function getIndexToIns(arr, num) {
  arr.sort(function(prev, next) {
    // prev is bigger then assigned to next, bubble sort
    return prev - next;
  });
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
