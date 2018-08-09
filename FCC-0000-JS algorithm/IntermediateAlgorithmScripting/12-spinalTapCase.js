
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // for the white space and underscores
  let regx = /\s+|_+/g;
  return str.replace(regx, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
