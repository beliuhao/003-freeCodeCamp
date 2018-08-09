// tips:
// String.prototype.charCodeAt()
// String.fromCharCode()
let charCodeOfA = 65;
let charCodeOfZ = 90;
function rot13(str) { // LBH QVQ VG!
  let upperCaseStr = str.toUpperCase();
  let strLen = str.length;
  let result = '';
  for(let i = 0; i < strLen; i++) {
    let charCode = upperCaseStr.charCodeAt(i);
    if(charCode < charCodeOfA || charCode > charCodeOfZ) {
      result += upperCaseStr[i];
    } else {
      result += (charCode + 13 > charCodeOfZ) ? String.fromCharCode(charCode + 13 - charCodeOfZ + charCodeOfA - 1) : String.fromCharCode(charCode + 13);
    }
  }
  return result;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
