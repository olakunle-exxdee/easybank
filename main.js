const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const list = document.querySelector(".navbar__list");
const overlay = document.querySelector(".overlay");
const anime = document.querySelector(".anime");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const heroImg = document.querySelector(".hero__img");
const heroContent = document.querySelector(".hero__content");

gsap.to(one, { y: "-100vh", delay: 0.2 });
gsap.to(two, { y: "-100vh", delay: 0.5 });
gsap.to(three, { y: "-100vh", delay: 0.9 });
gsap.fromTo(
  heroImg,
  { x: "0", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(2)", delay: 1.3 }
);

gsap.fromTo(
  heroContent,
  { x: "0", opacity: 0 },
  { x: 0, opacity: 1, ease: "back.out(2)", delay: 1.5 }
);

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
