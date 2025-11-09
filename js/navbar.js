// js/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  // Crear el contenedor del navbar
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  // Crear logo
  navbar.innerHTML = `
    <div class="logo">
      <img src="img/logo.png" alt="Logo TecnoStore">
      <h1>TecnoStore</h1>
    </div>
  `;

  // Crear lista de enlaces
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  // Generar cada enlace a partir del array
  navbarItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.title;
    a.href = item.url;
    if (item.id) a.id = item.id; // si tiene id (Logout)
    if (window.location.pathname.includes(item.url)) {
      a.classList.add("active"); // resalta la página actual
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  navbar.appendChild(ul);

  // Insertar al inicio del body
  document.body.insertBefore(navbar, document.body.firstChild);
});