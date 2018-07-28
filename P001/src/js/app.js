window.onload = init;
function init(){

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
  }
    maxSalary.oninput = function() {
    rangeRight.value = this.value;
  }
}

// <!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>jQuery UI Slider - Range slider</title>
//   <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
//   <link rel="stylesheet" href="/resources/demos/style.css">
//   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
//   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
//   <script>
//   $( function() {
//     $( "#slider-range" ).slider({
//       range: true,
//       min: 0,
//       max: 500,
//       values: [ 75, 300 ],
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
//   } );
//   </script>
// </head>
// <body>

// <p>
//   <label for="amount">Price range:</label>
//   <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
// </p>

// <div id="slider-range"></div>


// </body>
// </html>