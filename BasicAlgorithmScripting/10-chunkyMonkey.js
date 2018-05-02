//arr.slice() not change the original arr;
//arr.splice() change the original arr;
//str.slice(begin, end), str.substr(start, length), str.substring(start, end), all returns new str;
function chunkArrayInGroups(arr, size) {
  var arrayGroup = [];
  var arrLen = arr.length;
  if(arrLen < size) {
    return arr;
  } else {
    var num = arrLen / size;
    for(var i = 0; i < num; i++) {
      arrayGroup.push(arr.slice(i * size, (i+1) * size));
    }
    return arrayGroup;
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
