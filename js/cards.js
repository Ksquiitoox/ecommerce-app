// Genera dinámicamente las cards de productos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector("#contenedor-productos");
  if (contenedor && typeof productos !== "undefined") {
    contenedor.innerHTML = productos.map(prod => `
      <div style="background-color:white; border-radius:10px; width:260px; box-shadow:0 0 10px rgba(0,0,0,0.1); padding:15px;">
        <img src="${prod.imagen}" alt="${prod.nombre}" style="width:100%; border-radius:10px; height:180px; object-fit:cover;">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <p><strong>$${prod.precio.toLocaleString('es-AR')}</strong></p>
        <div style="display:flex; justify-content:center; align-items:center; gap:10px;">
          <button>-</button>
          <input type="number" value="1" min="1" style="width:50px; text-align:center;">
          <button>+</button>
        </div>
      </div>
    `).join("");
  }
});