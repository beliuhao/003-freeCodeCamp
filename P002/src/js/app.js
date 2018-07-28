// window.onload = init;
// function init() {
//   let navbarLink = document.querySelectorAll("#navbarCollapse .navbar-nav a");
//   let navbarLi = document.querySelectorAll("#navbarCollapse .navbar-nav li");
//   navbarLink.forEach(a => {
//     a.addEventListener("click", function() {
//       navbarLi.forEach(li => {
//         li.classList.remove("active");
//       })
//       this.parentNode.classList.add("active");
//     })
//   })
// }

$("document").ready(
  function init() {
    $( '#navbarCollapse .navbar-nav a' ).on( 'click', function () {
      $( '#navbarCollapse .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
    });
  }
)