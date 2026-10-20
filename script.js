
const productos = [
    { id: 1, nombre: "Laptop", precio: 35000, stock: 5 },
    { id: 2, nombre: "Audífonos", precio: 1200, stock: 8 },
    { id: 3, nombre: "Teclado mecánico", precio: 2500, stock: 4 },
    { id: 4, nombre: "Mouse inalámbrico", precio: 950, stock: 0 },
    { id: 5, nombre: "Monitor", precio: 12500, stock: 3 },
    { id: 6, nombre: "Memoria USB", precio: 450, stock: 10 }
];

let carrito = [];

const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const totalElemento = document.getElementById("total");
const campoBusqueda = document.getElementById("busqueda");
const mensajeBusqueda = document.getElementById("mensaje-busqueda");
const mensajeCarrito = document.getElementById("mensaje-carrito");
const botonBuscar = document.getElementById("btn-buscar");
const botonComprar = document.getElementById("btn-comprar");

// Mostrar productos disponibles para consulta
function mostrarProductos(lista = productos) {
    listaProductos.innerHTML = "";

    if (lista.length === 0) {
        listaProductos.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    lista.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.className = "precio";
        precio.textContent = `RD$ ${producto.precio.toLocaleString("es-DO")}`;

        const existencia = document.createElement("p");
        existencia.textContent = producto.stock > 0
            ? `Disponibles: ${producto.stock}`
            : "Agotado";

        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = producto.stock > 0
            ? "Agregar al carrito"
            : "Sin existencias";

        boton.disabled = producto.stock === 0;

        boton.addEventListener("click", () => agregarAlCarrito(producto.id));

        tarjeta.append(nombre, precio, existencia, boton);
        listaProductos.appendChild(tarjeta);
    });
}

// Buscar productos por nombre
function buscarProductos() {
    const termino = campoBusqueda.value.trim().toLowerCase();

    mensajeBusqueda.textContent = "";

    if (!termino) {
        mostrarProductos();
        mensajeBusqueda.textContent = "Escribe el nombre de un producto para buscar.";
        return;
    }

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(termino)
    );

    mostrarProductos(resultados);

    mensajeBusqueda.textContent = resultados.length > 0
        ? `Se encontraron ${resultados.length} producto(s).`
        : "No se encontraron productos.";
}

// Agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(item => item.id === id);

    if (!producto) {
        mensajeCarrito.textContent = "Error: producto no encontrado.";
        return;
    }

    const cantidadEnCarrito = carrito
        .filter(item => item.id === id)
        .reduce((total, item) => total + item.cantidad, 0);

    if (cantidadEnCarrito >= producto.stock) {
        mensajeCarrito.textContent = "No hay más existencias disponibles.";
        return;
    }

    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    mensajeCarrito.textContent = `${producto.nombre} se agregó al carrito.`;
    mostrarCarrito();
}

// Mostrar el carrito y calcular el total
function mostrarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.textContent = "Tu carrito está vacío.";
    } else {
        carrito.forEach(item => {
            const fila = document.createElement("div");
            fila.className = "item-carrito";

            const detalle = document.createElement("p");
            detalle.textContent =
                `${item.nombre} x ${item.cantidad} — RD$ ${(item.precio * item.cantidad).toLocaleString("es-DO")}`;

            const botonQuitar = document.createElement("button");
            botonQuitar.type = "button";
            botonQuitar.textContent = "Quitar uno";
            botonQuitar.addEventListener("click", () => quitarDelCarrito(item.id));

            fila.append(detalle, botonQuitar);
            listaCarrito.appendChild(fila);
        });
    }

    const cantidadTotal = carrito.reduce(
        (total, item) => total + item.cantidad,
        0
    );

    const precioTotal = carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

    contadorCarrito.textContent = cantidadTotal;
    totalElemento.textContent = precioTotal.toLocaleString("es-DO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Quitar una unidad del carrito
function quitarDelCarrito(id) {
    const item = carrito.find(producto => producto.id === id);

    if (item) {
        item.cantidad--;

        if (item.cantidad === 0) {
            carrito = carrito.filter(producto => producto.id !== id);
        }
    }

    mensajeCarrito.textContent = "Carrito actualizado.";
    mostrarCarrito();
}

// Validar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        mensajeCarrito.textContent =
            "No puedes finalizar la compra. Agrega productos al carrito.";
        return;
    }

    mensajeCarrito.textContent =
        "¡Compra de prueba realizada correctamente! Gracias por elegir CompraFácil.";

    carrito = [];
    mostrarCarrito();
}

// Eventos de los botones y del campo de búsqueda
botonBuscar.addEventListener("click", buscarProductos);

campoBusqueda.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        buscarProductos();
    }
});

botonComprar.addEventListener("click", finalizarCompra);

// Mostrar productos al abrir la página
mostrarProductos();
mostrarCarrito();
