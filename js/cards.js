// Estructura de productos
const productos = [
  { id: 1, nombre: "Notebook Lenovo", descripcion: "Ideal para oficina", precio: 799.99, imagen: "https://via.placeholder.com/200" },
  { id: 2, nombre: "Mouse Logitech", descripcion: "Precisión y confort", precio: 49.99, imagen: "https://via.placeholder.com/200" },
  { id: 3, nombre: "Teclado Mecánico", descripcion: "Retroiluminado RGB", precio: 99.99, imagen: "https://via.placeholder.com/200" }
];

// Componente de Card de Producto
function generarCards() {
  const contenedor = document.getElementById('cards-container');
  contenedor.innerHTML = productos.map(prod => `
    <div class="card">
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <span>$${prod.precio}</span>
      <div class="cantidad">
        <button onclick="cambiarCantidad(${prod.id}, -1)">-</button>
        <span id="cant-${prod.id}">0</span>
        <button onclick="cambiarCantidad(${prod.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function cambiarCantidad(id, delta) {
  const cantidadEl = document.getElementById(`cant-${id}`);
  let cantidad = parseInt(cantidadEl.textContent);
  cantidad = Math.max(0, cantidad + delta);
  cantidadEl.textContent = cantidad;
}

document.addEventListener('DOMContentLoaded', generarCards);