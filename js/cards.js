document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;
  //--POR CATEGORIA
  const productos = {
    Laptops: [
      {
        id: 1,
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        titulo: "Laptop Ultrabook Pro X",
        descripcion: "Procesador Intel i7, 16GB RAM, SSD 512GB, 15.6'",
        precio: 950000
      },
      {
        id: 2,
        imagen: "img/https://media.medion.com/cms/medion/uk/Beast-X25-Laptop_WP-Bg.jpg.jpg",
        titulo: "Laptop Gamer GX500",
        descripcion: "AMD Ryzen 5, 8GB RAM, SSD 256GB, 14'",
        precio: 850000
      }
      {
        ID: 3,
        imagen: "img/lapthttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aXhzi_CKAC8UWhtrbbKTvCC3fK8n3gtjow&sop3.jpg",
        titulo: "Laptop ProBook 450",
        descripcion: "Intel i5, 12GB RAM, SSD 1TB, 15.6'",
        precio: 1200000
      }
    ],
    Smartphones: [
      {
        id: 4,
        imagen: "img/smartphone1.jpg",
        titulo: "Smartphone Ultra X",
        descripcion: "Pantalla AMOLED 6.7'', 128GB, Cámara 108MP",
        precio: 480000
      },
      {
        id: 5,
        imagen: "img/smartphone2.jpg",
        titulo: "Smartphone Mini A2",
        descripcion: "Pantalla 5.9'', 64GB, Batería 5000mAh",
        precio: 320000
      }
      {
        id: 6,
        imagen: "img/smartphone3.jpg",
        titulo: "Smartphone Pro Max Z",
        descripcion: "Pantalla OLED 6.5'', 256GB, Cámara Triple 12MP",
        precio: 650000
      }
    ],
    Accesorios: [
      {
        id: 7,
        imagen: "img/auriculares1.jpg",
        titulo: "Auriculares ProSound",
        descripcion: "Bluetooth 5.3, Cancelación de ruido, batería 30h",
        precio: 120000
      },
      {
        id: 8,
        imagen: "img/mouse1.jpg",
        titulo: "Mouse Inalámbrico RGB",
        descripcion: "Sensor óptico 16000 DPI, 7 botones programables",
        precio: 55000
      }
      {
        id: 9,
        imagen: "img/teclado1.jpg",
        titulo: "Teclado Mecánico Gamer",
        descripcion: "Switches Red, Retroiluminación RGB, Anti-Ghosting",
        precio: 80000
      }
    ]
  };
  //DETECTAR CATEGORIA
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  const categoria = productos[currentPage] || [];
  //GENERADOR
  categoria.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
      <div class="cantidad">
        <button class="btn-cantidad restar">-</button>
        <input type="number" value="1" min="1">
        <button class="btn-cantidad sumar">+</button>
      </div>
      <button class="btn-agregar">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });

  //ACUMULADOR CANTIDAD
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