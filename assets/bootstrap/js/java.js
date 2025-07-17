// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Dark Mode Toggle
const darkBtn = document.getElementById('darkToggle');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}
