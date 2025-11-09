// Redirige al login al hacer clic en Logout
document.addEventListener("DOMContentLoaded", () => {
  const logoutLink = document.querySelector("a[href='#']");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});