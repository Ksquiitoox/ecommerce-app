document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar');

  if (navbarContainer) {
    let navHTML = `
      <nav class="navbar">
        <div class="logo">
          <img src="img/logo.png" alt="Logo TecnoStore">
          <h1>TecnoStore</h1>
        </div>
        <ul class="nav-links">
    `;

    pages.forEach(page => {
      if (page.title === "Logout") {
        navHTML += `<li><a href="#" id="logoutBtn">${page.title}</a></li>`;
      } else {
        navHTML += `<li><a href="${page.url}">${page.title}</a></li>`;
      }
    });

    navHTML += `
        </ul>
      </nav>
    `;

    navbarContainer.innerHTML = navHTML;

    // Logout redirección
    const logout = document.getElementById('logoutBtn');
    if (logout) {
      logout.addEventListener('click', () => {
        window.location.href = "login.html";
      });
    }
  }
});