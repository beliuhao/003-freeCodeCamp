
function confirmEnding(str, target) {
  var lengthOfStr = str.length;
  var lengthOfTarget = target.length;
  if(lengthOfTarget > lengthOfStr) {
    return false;
  } else {
    var splicedStr = str.substr(lengthOfStr - lengthOfTarget, lengthOfTarget);
    return splicedStr === target ? true : false;
  }
}

confirmEnding("Bastian", "n");