// tips:
// String.prototype.charCodeAt()
// String.fromCharCode()
var charCodeOfA = 65;
var charCodeOfZ = 90;
function rot13(str) { // LBH QVQ VG!
  var upperCaseStr = str.toUpperCase();
  var strLen = str.length;
  var result = '';
  for(var i = 0; i < strLen; i++) {
    var charCode = upperCaseStr.charCodeAt(i);
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
