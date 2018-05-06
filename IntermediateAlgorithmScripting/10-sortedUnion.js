
function uniteUnique(arr) {
  let arrArray = [];
  for (let i = 0; i < arguments.length; i++) {
    arrArray.push(arguments[i]);
  }
  let result = arrArray.reduce(function(pre, next) {
    next.forEach(function(el) {
      if(!pre.includes(el)) {
        pre.push(el);
      }
    });
    return pre;
  }, []);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
