// Navbar Scroll Effect

window.addEventListener("scroll", () => {

  const navbar = document.getElementById("navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});


// Custom Cursor

const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursor-ring");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursorRing.style.left = e.clientX + "px";
  cursorRing.style.top = e.clientY + "px";

});


// Mobile Menu

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("open");

  mobileMenu.classList.toggle("open");

});


// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("visible");

    }

  });

});