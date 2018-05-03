
function titleCase(str) {
  let strToArray = str.toLowerCase().split(' ');
  let formattedArray = strToArray.map(function(word) {
    let wordToArray = word.split('');
    wordToArray[0] = wordToArray[0].toUpperCase();
    let formattedWord = wordToArray.join('');
    return formattedWord;
  });
  return formattedArray.join(' ');
}

titleCase("I'm a little tea pot");
