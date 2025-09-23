// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu on click
mobileMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
