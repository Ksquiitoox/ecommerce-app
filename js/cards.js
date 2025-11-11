document.addEventListener("DOMContentLoaded", () => {
  const destacados = [
    {
      imagen: "img/laptop1.jpg",
      titulo: "Laptop Gamer GX500",
      descripcion: "Intel i7, 16GB RAM, SSD 512GB",
      precio: 950000
    },
    {
      imagen: "img/smartphone1.jpg",
      titulo: "Smartphone Ultra X",
      descripcion: "Pantalla AMOLED 6.7'', 128GB",
      precio: 480000
    },
    {
      imagen: "img/auriculares1.jpg",
      titulo: "Auriculares ProSound",
      descripcion: "Bluetooth 5.3, cancelación de ruido",
      precio: 120000
    },
    {
      imagen: "img/mouse1.jpg",
      titulo: "Mouse RGB Pro",
      descripcion: "Sensor óptico 16000 DPI",
      precio: 55000
    }
  ];

  const contenedor = document.getElementById("contenedor-productos");
  destacados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.titulo}">
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <p class="precio">$${p.precio.toLocaleString("es-AR")}</p>
      <div class="cantidad">
        <button class="btn-cantidad restar">-</button>
        <input type="number" value="1" min="1">
        <button class="btn-cantidad sumar">+</button>
      </div>
      <button class="btn-agregar">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });

  // Botones de cantidad
  contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("sumar")) {
      const input = e.target.parentElement.querySelector("input");
      input.value = parseInt(input.value) + 1;
    } else if (e.target.classList.contains("restar")) {
      const input = e.target.parentElement.querySelector("input");
      if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    }
  });
});