document.addEventListener("DOMContentLoaded", function() {
  // sidenav instance
  var elemsSideNav = document.querySelectorAll(".sidenav");
  var instancesSideNav = M.Sidenav.init(elemsSideNav, {});
  // scrollspy instance
  var elemsScrollspy = document.querySelectorAll(".scrollspy");
  var instancesScrollspy = M.ScrollSpy.init(elemsScrollspy, {
    activeClass: "active",
    scrollOffset: 75
  });
});

// for smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
