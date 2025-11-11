document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuarioLogueado) {
      alert(`Cerraste sesión correctamente. ¡Hasta la próxima, ${usuarioLogueado.nombre}! 👋`);
    }

    localStorage.removeItem("usuarioLogueado");
    window.location.href = "Login.html";
  });
});
