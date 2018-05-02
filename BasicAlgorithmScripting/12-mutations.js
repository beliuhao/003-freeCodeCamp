
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var result = true;
  var letters = arr[1].split('');
  letters.forEach(function(letter) {
    if(arr[0].indexOf(letter) === -1){
      result = false;
    }
  });
  return result;
}

mutation(["hello", "hey"]);
