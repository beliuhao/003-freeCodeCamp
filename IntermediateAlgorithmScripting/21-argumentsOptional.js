
function addTogether() {
  if(arguments.length === 2) {
    if(typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number') {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  } else {
    if(typeof(arguments[0]) === 'number') {
      let arg = arguments[0];
      return function(num) {
        if(typeof(arguments[0]) === 'number') {
          return num + arg;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
}

addTogether(2)(3);
