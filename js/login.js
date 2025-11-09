// Simula el inicio de sesión
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simula un login correcto
      window.location.href = "index.html";
    });
  }
});