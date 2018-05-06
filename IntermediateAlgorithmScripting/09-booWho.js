
function booWho(bool) {
  return (bool === true || bool === false);
}

booWho(null);

// anothor solution:
// function booWho(bool) {
//   return typeof bool === 'boolean';
// }