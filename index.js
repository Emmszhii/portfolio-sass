const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");

if (toggleMenu) {
  toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

var slider = tns({
  container: ".testimonials__slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controlsText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  nav: false,
  autoplay: false,
});
