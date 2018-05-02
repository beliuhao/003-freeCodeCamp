function palindrome(str) {
  var formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var reversedStr = formattedStr.split('').reverse().join('');
  return reversedStr === formattedStr ? true : false;
}

palindrome("eye");