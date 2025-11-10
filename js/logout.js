document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Acá podrías limpiar el almacenamiento si guardás sesión
      // localStorage.removeItem("usuario");

      // Redirige al login
      window.location.href = "login.html";
    });
  }
});