
function pairElement(str) {
  let result = [];
  const basePairs = {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "T"
  };
  let strToArray = str.split('');
  strToArray.forEach(function(el) {
    let pair = [el, basePairs[el]];
    result.push(pair);
  });
  return result;
}

pairElement("GCG");
