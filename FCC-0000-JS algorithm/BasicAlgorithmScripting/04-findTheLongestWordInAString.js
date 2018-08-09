function findLongestWord(str) {
  let strToArray = str.split(' ');
  let lengthOfEachWord = strToArray.map(function(word){
    return word.length;
  });
  let maxLength = lengthOfEachWord.reduce(function(previousVal, currentVal) {
    return previousVal >= currentVal ? previousVal : currentVal;
  });
  return maxLength;
}

// Solution 2 :
// function findLongestWord(str) {
//   let strToArray = str.split(' ');
//   let lengthOfEachWord = strToArray.map(function(word){
//     return word.length;
//   });
//   let maxLength = 0;
//   for(let i = 0; i < lengthOfEachWord.length; i++) {
//     if(maxLength <= lengthOfEachWord[i]) {
//       maxLength = lengthOfEachWord[i];
//     }
//   }
//   return maxLength;
// }

findLongestWord("The quick brown fox jumped over the lazy dog");
