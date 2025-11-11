document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const nav = document.createElement("nav");
  nav.classList.add("navbar");
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  logoDiv.innerHTML = `
    <img src="img/logo.png" alt="Logo TecnoStore">
    <h1>TecnoStore</h1>
  `;
  nav.appendChild(logoDiv);
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  navbarItems.forEach(item => {
    if (usuarioLogueado && (item.title === "Login" || item.title === "Registro")) return;
    if (!usuarioLogueado && item.title === "Logout") return;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.title;
    a.href = item.url;
    if (item.id) a.id = item.id;
    const currentPage = window.location.pathname.split("/").pop();
    if (a.href.includes(currentPage)) a.classList.add("active");
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  navbarContainer.appendChild(nav);
  // Mostrar saludo si hay usuario logueado
  if (usuarioLogueado) {
    const saludo = document.createElement("span");
    saludo.textContent = `👋 Hola, ${usuarioLogueado.nombre}`;
    saludo.style.marginLeft = "10px";
    saludo.style.fontWeight = "bold";
    saludo.style.fontSize = "1rem";
    saludo.style.color = "#38bdf8";
    logoDiv.appendChild(saludo);
  }
  // Bloquear acceso a páginas restringidas si no hay login
  const requiereLogin = ["Categorias.html", "Laptops.html", "Smartphones.html", "Accesorios.html"];
  const paginaActual = window.location.pathname.split("/").pop();
  if (requiereLogin.includes(paginaActual) && !usuarioLogueado) {
    alert("Tenés que iniciar sesión para acceder a esta sección.");
    window.location.href = "Login.html";
  }
});