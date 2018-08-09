
function translatePigLatin(str) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  if(vowel.includes(str.charAt(0))) {
    str = str + 'way';
  } else {
    for(let i = 1; i < str.length; i++) {
      if(vowel.includes(str.charAt(i))) {
        str = str.slice(i) + str.substr(0, i) + 'ay';
        break;
      }
    }
  }
  return str;
}

translatePigLatin("consonant");
