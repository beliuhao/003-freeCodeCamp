function findLongestWord(str) {
  var strToArray = str.split(' ');
  var lengthOfEachWord = strToArray.map(function(word){
    return word.length;
  });
  var maxLength = lengthOfEachWord.reduce(function(previousVal, currentVal) {
    return previousVal >= currentVal ? previousVal : currentVal;
  });
  return maxLength;
}

// Solution 2 :
// function findLongestWord(str) {
//   var strToArray = str.split(' ');
//   var lengthOfEachWord = strToArray.map(function(word){
//     return word.length;
//   });
//   var maxLength = 0;
//   for(var i = 0; i < lengthOfEachWord.length; i++) {
//     if(maxLength <= lengthOfEachWord[i]) {
//       maxLength = lengthOfEachWord[i];
//     }
//   }
//   return maxLength;
// }

findLongestWord("The quick brown fox jumped over the lazy dog");
