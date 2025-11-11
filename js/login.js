document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("LoginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario existente
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
      // Guardar usuario logueado en localStorage
      localStorage.setItem("loggedUser", JSON.stringify(usuario));

      alert(`Inicio de sesión exitoso. ¡Bienvenido ${usuario.nombre}! 👋`);
      window.location.href = "index.html"; // Redirige al inicio
    } else {
      alert("Usuario o contraseña incorrectos. Por favor, intentá nuevamente.");
    }
  });
});
