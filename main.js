const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const list = document.querySelector(".navbar__list");
const overlay = document.querySelector(".overlay");

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    menu.classList.add("open");
    overlay.classList.add("open");
    list.classList.add("open");

    showMenu = true;
  } else {
    menu.classList.remove("open");
    overlay.classList.remove("open");
    list.classList.remove("open");

    showMenu = false;
  }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
const header = document.querySelector(".header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
