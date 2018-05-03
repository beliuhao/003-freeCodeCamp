
function confirmEnding(str, target) {
  let lengthOfStr = str.length;
  let lengthOfTarget = target.length;
  if(lengthOfTarget > lengthOfStr) {
    return false;
  } else {
    let splicedStr = str.substr(lengthOfStr - lengthOfTarget, lengthOfTarget);
    return splicedStr === target ? true : false;
  }
}

confirmEnding("Bastian", "n");