
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  let objOfArr = {};
  arr1.forEach(function(el) {
    objOfArr[el[1]] = el[0];
  });
  arr2.forEach(function(el) {
    if(objOfArr.hasOwnProperty(el[1])) {
      objOfArr[el[1]] += el[0];
    } else {
      objOfArr[el[1]] = el[0];
    }
  });
  let keysOfObj = Object.keys(objOfArr);
  keysOfObj.sort();
  let result = [];
  keysOfObj.forEach(function(el) {
    let keyValPair = [objOfArr[el], el];
    result.push(keyValPair);
  });
  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
