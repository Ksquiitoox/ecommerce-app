document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("loggedUser"));
    const nombre = usuario?.nombre || "usuario";

    // Eliminar usuario logueado
    localStorage.removeItem("loggedUser");

    alert(`Cerraste sesión correctamente. ¡Hasta la próxima, ${nombre}! 👋`);
    window.location.href = "Login.html";
  });
});
