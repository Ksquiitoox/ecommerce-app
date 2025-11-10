document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("usuario"); // borra sesión
    alert("Cerraste sesión correctamente 👋");
    window.location.href = "login.html";
  });
});