
function titleCase(str) {
  var strToArray = str.toLowerCase().split(' ');
  var formattedArray = strToArray.map(function(word) {
    var wordToArray = word.split('');
    wordToArray[0] = wordToArray[0].toUpperCase();
    var formattedWord = wordToArray.join('');
    return formattedWord;
  });
  return formattedArray.join(' ');
}

titleCase("I'm a little tea pot");
