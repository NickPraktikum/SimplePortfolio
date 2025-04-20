const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  menuOverlay.classList.toggle("translate-x-full");
  menuToggle.classList.toggle("bg-white");
  menuToggle.classList.toggle("bg-transparent");
  menuToggle.classList.toggle("shadow");
});
