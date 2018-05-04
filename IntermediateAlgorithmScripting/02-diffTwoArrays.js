
function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.forEach(function(el1) {
    if(!arr2.includes(el1)) {
      newArr.push(el1);
    }
  });
  arr2.forEach(function(el2) {
    if(!arr1.includes(el2)) {
      newArr.push(el2);
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
