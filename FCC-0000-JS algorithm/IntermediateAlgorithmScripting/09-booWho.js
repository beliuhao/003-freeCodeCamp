
function booWho(bool) {
  return (bool === true || bool === false);
}

booWho(null);

// another solution:
// function booWho(bool) {
//   return typeof bool === 'boolean';
// }