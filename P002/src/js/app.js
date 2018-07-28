window.onload = init;
function init() {
  let navbarLink = document.querySelectorAll("#navbarCollapse .navbar-nav a");
  let navbarLi = document.querySelectorAll("#navbarCollapse .navbar-nav li");
  navbarLink.forEach(a => {
    a.addEventListener("click", function() {
      navbarLi.forEach(li => {
        li.classList.remove("active");
      })
      this.parentNode.classList.add("active");
    })
  })
}