window.onload = init;
function init() {
  let minSalary = document.getElementById("minSalary");
  let maxSalary = document.getElementById("maxSalary");
  let rangeLeft = document.getElementById("rangeLeft");
  let rangeRight = document.getElementById("rangeRight");
  // Display the default slider1 value
  rangeLeft.value = minSalary.value;
  rangeRight.value = maxSalary.value;
  // Update the current slider1 value (each time you drag the slider handle)
  minSalary.oninput = function() {
    rangeLeft.value = this.value;
  };
  maxSalary.oninput = function() {
    rangeRight.value = this.value;
  };
}
