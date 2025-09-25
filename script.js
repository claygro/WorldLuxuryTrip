// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu on click
mobileMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Loader + AOS Init
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000); // Loader visible for 2s
});

// Booking Form Submit
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    destination: document.getElementById("destination").value,
    dates: document.getElementById("dates").value,
    guests: document.getElementById("guests").value,
    budget: document.getElementById("budget").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_d7eqxq7", "template_j4r0pvi", templateParams).then(
    (response) => {
      console.log("✅ SUCCESS!", response.status, response.text);
      alert(
        "Thank you for booking with World Luxury Trip! We’ve received your request."
      );
      document.getElementById("bookingForm").reset();
    },
    (error) => {
      console.log("❌ FAILED...", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  );
});
