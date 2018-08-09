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

//   // smooth scrolling when clicking an anchor link
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
//   });
// }

$(document).ready(
  function init() {
    // update the active state of the navbar link
    $( '#navbarCollapse .navbar-nav a' ).on( 'click', function () {
      $( '#navbarCollapse .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
    });
    // smooth scrolling when clicking an anchor link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              // block: "start"
          });
      });
    });

  }
)