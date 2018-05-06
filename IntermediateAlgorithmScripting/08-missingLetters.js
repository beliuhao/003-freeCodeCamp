
function fearNotLetter(str) {
  let strLen = str.length;
  let start = str.charCodeAt(0);
  let end = str.charCodeAt(strLen - 1);
  if(end - start + 1 === strLen) {
    return undefined;
  } else {
    for(let i = 1; i < strLen; i++) {
      let missingLetter = String.fromCharCode(start + i);
      if(str.indexOf(missingLetter) === -1) {
        return missingLetter;
      }
    }
  }
}

fearNotLetter("abce");
