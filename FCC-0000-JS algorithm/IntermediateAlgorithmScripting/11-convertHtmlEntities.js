// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let strArray = str.split('');
  const htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  let filteredArray = strArray.map(function(el) {
    return htmlEntities[el] || el;
  });
  return filteredArray.join('');
}

convertHTML("Dolce & Gabbana");

// another solution:
// function convertHTML(str) {
//   //Chaining of replace method with different arguments
//     str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
//   return str;
// }