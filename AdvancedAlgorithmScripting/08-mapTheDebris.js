
function orbitalPeriod(arr) {
  let result = [];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const formula = function(valueOfAvgAlt) {
    return 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + valueOfAvgAlt), 3) / GM);
  };
  arr.forEach(function(obj) {
    let valueOfOrbitalPeriod = Math.round(formula(obj["avgAlt"]));
    obj["orbitalPeriod"] = valueOfOrbitalPeriod;
    delete obj["avgAlt"];
    result.push(obj);
  });
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// obj["abc"]  === obj.abc
// do not miss the ""
