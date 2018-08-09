function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let srcKeys = Object.keys(source);
  // Only change code below this line
  collection.forEach(function(obj) {
    let isIncluded = true;
    for(let i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        isIncluded = false;
        break;
      }
    }
    if(isIncluded) {
      arr.push(obj);
    }
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });