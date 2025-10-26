// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Menu mobile
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});