
function truncateString(str, num) {
  var strLen = str.length;
  if(strLen > num) {
    if(num <= 3) {
      return str.slice(0, num).concat('...');
    } else {
      return str.slice(0, num - 3).concat('...');
    }
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
