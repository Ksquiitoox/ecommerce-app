// js/login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("Por favor, completá todos los campos.");
        return;
      }

      // Simulación de login correcto
      if (email && password) {
        localStorage.setItem("usuario", email); // o el nombre, según tu lógica
        alert("Inicio de sesión exitoso. Bienvenido a TecnoStore!");
        window.location.href = "index.html"; // Redirección
      } else {
        alert("Credenciales incorrectas. Intente nuevamente.");
      }
    });
  }
});