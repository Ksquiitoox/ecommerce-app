document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("RegisterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const fecha = document.getElementById("fecha").value;

    // Validar campos vacíos
    if (!nombre || !apellido || !email || !password || !fecha) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya existe
    const existe = usuarios.some(u => u.email === email);
    if (existe) {
      alert("Este correo ya está registrado. Iniciá sesión o usá otro correo.");
      return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = { nombre, apellido, email, password, fecha };

    // Guardar en la lista general de usuarios
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Guardar sesión activa del nuevo usuario
    localStorage.setItem("loggedUser", JSON.stringify(nuevoUsuario));

    alert(`Registro exitoso. ¡Bienvenido ${nombre}! 👋`);
    window.location.href = "index.html";
  });
});
