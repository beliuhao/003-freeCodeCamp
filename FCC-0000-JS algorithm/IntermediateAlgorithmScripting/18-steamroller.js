
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let result = [];
  let recursion = function(el) {
    if(Array.isArray(el)) {
      el.forEach(recursion);
    } else {
      result.push(el);
    }
  };
  recursion(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
