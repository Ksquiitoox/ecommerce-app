document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  const usuarioLogueado = JSON.parse(localStorage.getItem("loggedUser"));
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  // LOGO
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  logoDiv.innerHTML = `
    <img src="img/logo.png" alt="Logo TecnoStore">
    <h1>TecnoStore</h1>
  `;
  nav.appendChild(logoDiv);

  // MENÚ DE NAVEGACIÓN
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  navbarItems.forEach(item => {
    // Ocultar opciones según estado del usuario
    if (usuarioLogueado && (item.title === "Login" || item.title === "Registro")) return;
    if (!usuarioLogueado && item.title === "Logout") return;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.title;
    a.href = item.url;
    if (item.id) a.id = item.id;

    // Resaltar página activa
    const currentPage = window.location.pathname.split("/").pop();
    if (a.href.includes(currentPage)) a.classList.add("active");

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  navbarContainer.appendChild(nav);

  // SALUDO AL USUARIO LOGUEADO
  if (usuarioLogueado) {
    const saludo = document.createElement("span");
    saludo.textContent = `👋 Hola, ${usuarioLogueado.nombre}`;
    saludo.style.marginLeft = "15px";
    saludo.style.fontWeight = "bold";
    saludo.style.color = "#38bdf8";
    logoDiv.appendChild(saludo);
  }

  // FUNCIONALIDAD DE LOGOUT
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const nombre = usuarioLogueado?.nombre || "usuario";
      localStorage.removeItem("loggedUser");
      alert(`Cerraste sesión correctamente. ¡Hasta la próxima, ${nombre}! 👋`);
      window.location.href = "Login.html";
    });
  }
});
