
function slasher(arr, howMany) {
  var arrLen = arr.length;
  if(arr.length <= howMany) {
    return [];
  } else {
    return arr.splice(howMany);
  }
}

slasher([1, 2, 3], 2);
