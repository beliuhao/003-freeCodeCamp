var falsyArray = [false, null, 0, "", undefined, NaN];
function bouncer(arr) {
  var filteredArr = arr.filter(function(el) {
    return !falsyArray.includes(el);
  });
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);



// solution 2 :
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);