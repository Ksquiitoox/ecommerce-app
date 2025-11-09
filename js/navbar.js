// Estructura de las páginas
const paginas = [
  { nombre: "Home", url: "index.html" },
  { nombre: "Categorías", url: "Categorias.html" },
  { nombre: "Laptops", url: "Laptops.html" },
  { nombre: "Smartphones", url: "Smartphones.html" },
  { nombre: "Accesorios", url: "Accesorios.html" },
  { nombre: "Login", url: "login.html" },
  { nombre: "Registro", url: "register.html" },
  { nombre: "Logout", url: "#" }
];

// Inserta la navbar en cada página
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector(".navbar");
  if (navbarContainer) {
    let html = `
      <div class="logo">
        <img src="img/logo.png" alt="Logo TecnoStore">
        <h1>TecnoStore</h1>
      </div>
      <ul class="nav-links">
        ${paginas.map(p => `<li><a href="${p.url}">${p.nombre}</a></li>`).join("")}
      </ul>
    `;
    navbarContainer.innerHTML = html;

    // Marcar la página actual
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(a => {
      if (a.getAttribute("href") === currentPage) {
        a.classList.add("active");
      }
    });
  }
});