function palindrome(str) {
  let formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedStr = formattedStr.split('').reverse().join('');
  return reversedStr === formattedStr ? true : false;
}

palindrome("eye");