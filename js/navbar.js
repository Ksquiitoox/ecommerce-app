document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".nav-links");
  if (!navList) return;

  // Detecta en qué página estamos
  const currentPage = window.location.pathname.split("/").pop();

  // Crea los ítems del menú a partir del array del archivo navbarData.js
  navbarItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.title;
    a.href = item.url;
    if (item.id) a.id = item.id;

    // Marca activo el enlace correspondiente a la página actual
    if (item.url === currentPage) {
      a.classList.add("active");
    }

    li.appendChild(a);
    navList.appendChild(li);
  });
});