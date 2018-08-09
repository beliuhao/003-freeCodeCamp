function checkCashRegister(price, cash, cid) {
  //declare and initialize variables
  var change = Math.round((cash - price) * 100);
  var value = 0;
  var changeRecord = [];
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //helper function to check if sufficient cash for change is in the drawer
  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  //Actual program/control flow starts here
  if (enoughFund(cid) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid) === change)
    return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value)
        changeRecord.push([cid[i][0], value]);
    }
  }
  //divide each array by 100 to display a proper money format
  changeRecord.forEach(el => el[1] = (el[1] / 100));
  return changeRecord;
}