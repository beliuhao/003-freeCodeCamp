
function uniteUnique(arr) {
  let arrArray = [];
  for (let i = 0; i < arguments.length; i++) {
    arrArray.push(arguments[i]);
  }
  let result = arrArray.reduce(function(curr, next) {
    next.forEach(function(el) {
      if(!curr.includes(el)) {
        curr.push(el);
      }
    });
    return curr;
  }, []);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
