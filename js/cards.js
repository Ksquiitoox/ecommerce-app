const productos = [
  {
    titulo: "Notebook Pro 15\"",
    descripcion: "Rendimiento ideal para trabajo y estudio.",
    precio: 750000,
    imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    titulo: "UltraBook X",
    descripcion: "Ligera, potente y con gran autonomía.",
    precio: 890000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aXhzi_CKAC8UWhtrbbKTvCC3fK8n3gtjow&s"
  },
  {
    titulo: "Gaming Beast",
    descripcion: "Diseñada para jugadores exigentes.",
    precio: 1200000,
    imagen: "https://media.medion.com/cms/medion/uk/Beast-X25-Laptop_WP-Bg.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardsContainer");
  if (container) {
    container.innerHTML = productos.map(p => `
      <div class="card">
        <img src="${p.imagen}" alt="${p.titulo}">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <p><strong>$${p.precio.toLocaleString()}</strong></p>
        <div class="cantidad">
          <button class="menos">-</button>
          <span>1</span>
          <button class="mas">+</button>
        </div>
      </div>
    `).join('');

    container.addEventListener('click', e => {
      if (e.target.classList.contains('mas') || e.target.classList.contains('menos')) {
        const span = e.target.parentElement.querySelector('span');
        let valor = parseInt(span.textContent);
        if (e.target.classList.contains('mas')) valor++;
        if (e.target.classList.contains('menos') && valor > 1) valor--;
        span.textContent = valor;
      }
    });
  }
});