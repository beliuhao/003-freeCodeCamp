
function dropElements(arr, func) {
  // Drop them elements.
  while(arr.length > 0) {
    if(func(arr[0])) {
      return arr;
    } else {
      arr.shift(arr[0]);
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });



// function dropElements(arr, func) {
//   // Drop them elements.
//   while(arr.length > 0) {
//     if(!func(arr[0])) {
//       arr.shift(arr[0]);
//     } else {
//       return arr;
//     }
//   }
//   return arr;
// }