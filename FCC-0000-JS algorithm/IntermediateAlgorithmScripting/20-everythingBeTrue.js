
function truthCheck(collection, pre) {
  let falseArray = [null, undefined, "", NaN, false, 0];
  let result = true;
  collection.forEach(function(obj) {
    if(!obj.hasOwnProperty(pre) || falseArray.includes(obj[pre])) {
      result = false;
    }
  });
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// function truthCheck(collection, pre) {
//   let result = true;
//   collection.forEach(function(obj) {
//     if(!obj.hasOwnProperty(pre) || !Boolean(obj[pre])) {
//       result = false;
//     }
//   });
//   return result;
// }
