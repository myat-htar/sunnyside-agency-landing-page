let mobileNavIcon = document.querySelector(".mobile-nav");
let navs = document.querySelector(".main-nav");
let navLink = document.querySelectorAll(".main-nav__item a");
mobileNavIcon.addEventListener("click", function () {
  navs.classList.toggle("show-nav");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
      navs.classList.remove("show-nav");
    });
  }
});
