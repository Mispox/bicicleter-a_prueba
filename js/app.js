 // Definición de Productos
const productos = [
    { id: "p001", nombre: "Cadena Shimano Deore", precio: 2500, imagen: "img/CadenaShimano.jpg" },
    { id: "p002", nombre: "Cámara 29' Reforzada", precio: 5000, imagen: "img/camara29.jpg" },
    { id: "p003", nombre: "Cubierta MTB 29'' Maxxis", precio: 10000, imagen: "img/cubierta29.jpg" },

];

// Elementos del DOM
const contenedorProductos = document.getElementById("productos");

// --- Funciones de Utilidad ---

function formatPrice(price) {
    // Formatea el precio a moneda argentina (ARS)
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
}

// --- Renderizado de Productos ---

function renderProducts() {
    // Generación masiva de HTML usando map() y join('')
    const productsHtml = productos.map(p => `
        <div class="card">
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>Cod: ${p.id}</p>
            <p>${formatPrice(p.precio)}</p>
        </div>
    `).join('');

    // Insertamos todo el HTML de golpe
    contenedorProductos.innerHTML = productsHtml;
}

// Inicialización: Renderiza los productos al cargar el script
renderProducts();