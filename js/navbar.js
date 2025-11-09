// Estructura de páginas (array de objetos)
const paginas = [
  { titulo: "Inicio", url: "index.html" },
  { titulo: "Productos", url: "index.html#productos" },
  { titulo: "Contacto", url: "#" }
];

// Componente de Navbar
function generarNavbar() {
  const nav = document.getElementById('navbar');
  const usuario = localStorage.getItem('usuario') || 'Invitado';

  nav.innerHTML = `
    <nav class="navbar">
      <h2 class="logo">TecnoStore</h2>
      <ul class="nav-links">
        ${paginas.map(p => `<li><a href="${p.url}">${p.titulo}</a></li>`).join('')}
        <li><button id="logoutBtn">Cerrar sesión</button></li>
      </ul>
      <span class="usuario">👤 ${usuario}</span>
    </nav>
  `;

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
  });
}

document.addEventListener('DOMContentLoaded', generarNavbar);