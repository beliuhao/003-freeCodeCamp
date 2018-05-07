
function binaryAgent(str) {
  let strArray = str.split(' ');
  let result = strArray.map(function(el) {
    return String.fromCharCode(parseInt(el, 2));
  });
  return result.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



// function binaryAgent(str) {
//   let strArray = str.split(' ');
//   let result = '';
//   strArray.forEach(function(el) {
//     result += String.fromCharCode(parseInt(el, 2));
//   });
//   return result;
// }

// function binaryAgent(str) {
//   let strArray = str.split(' ');
//   let result = [];
//   strArray.forEach(function(el) {
//     result.push(String.fromCharCode(parseInt(el, 2)));
//   });
//   return result.join('');
// }
