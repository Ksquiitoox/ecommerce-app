document.addEventListener("DOMContentLoaded", () => {
  const contenedorCarrito = document.getElementById("contenedor-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const btnVaciar = document.getElementById("vaciar-carrito");
  const carrito = [];

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar")) {
      const card = e.target.closest(".card");
      const titulo = card.querySelector("h3").textContent;
      const precio = parseInt(card.querySelector(".precio").textContent.replace("$", "").replace(/\./g, ""));
      const cantidad = parseInt(card.querySelector("input").value);

      const itemExistente = carrito.find(p => p.titulo === titulo);
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carrito.push({ titulo, precio, cantidad });
      }

      actualizarCarrito();
    }
  });

  btnVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
  });

  function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("item-carrito");
      div.innerHTML = `
        <span>${p.titulo}</span>
        <span>${p.cantidad} x $${p.precio.toLocaleString("es-AR")}</span>
      `;
      contenedorCarrito.appendChild(div);
      total += p.precio * p.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toLocaleString("es-AR")}`;
  }
});