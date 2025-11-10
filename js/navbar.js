  document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  // Crear el contenedor principal de la navbar
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  // Logo de la tienda
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  logoDiv.innerHTML = `
    <img src="img/logo.png" alt="Logo TecnoStore">
    <h1>TecnoStore</h1>
  `;
  nav.appendChild(logoDiv);

  // Crear lista de enlaces
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  navbarItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.title;
    a.href = item.url;

    // Si tiene ID (como Logout), lo asignamos
    if (item.id) a.id = item.id;

    // Detectar página activa
    const currentPage = window.location.pathname.split("/").pop();
    if (a.href.includes(currentPage)) {
      a.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  navbarContainer.appendChild(nav);
});

