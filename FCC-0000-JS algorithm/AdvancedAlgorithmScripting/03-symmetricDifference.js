
function sym(args) {
  let argArray = [];
  for(let i = 0; i < arguments.length; i++) {
    argArray.push(arguments[i]);
  }
  let symCallback = function(curr, next) {
    let res = [];
    curr.forEach(function(el) {
      if(!next.includes(el)) {
        res.push(el);
      }
    });
    next.forEach(function(el) {
      if(!curr.includes(el)) {
        res.push(el);
      }
    });
    return res;
  };
  let result = argArray.reduce(symCallback);

  result.sort(function(a, b) {
    return a - b;
  });
  return result.filter(function(el, index) {
      return result.indexOf(el) === index;
  });
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);


// // Remove duplicate values from JS array [duplicate]
// let res = [1, 2, 3, 4, 2, 1]
// let result = res.filter(function(el, index) {
//   return res.indexOf(el) === index;
// });