 // Definición de Productos
const productos = [
    { id: "p001", nombre: "Cadena Shimano Deore", precio: 2500, imagen: "https://placehold.co/400x300/4F46E5/ffffff?text=CADENA+SHIMANO" },
    { id: "p002", nombre: "Cámara 29' Reforzada", precio: 5000, imagen: "https://placehold.co/400x300/EAB308/000000?text=CAMARA+29" },
    { id: "p003", nombre: "Cubierta MTB 29'' Maxxis", precio: 10000, imagen: "https://placehold.co/400x300/10B981/ffffff?text=CUBIERTA+29" },

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
        <div class="card bg-white p-5 rounded-xl shadow-lg flex flex-col items-center">
            <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-40 object-cover rounded-lg mb-4 border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-800">${p.nombre}</h3>
            <p class="text-sm text-gray-500 my-2">Cod: ${p.id}</p>
            <p class="text-xl font-bold text-blue-600 mt-2">${formatPrice(p.precio)}</p>
        </div>
    `).join('');
    
    // Insertamos todo el HTML de golpe
    contenedorProductos.innerHTML = productsHtml;
}

// Inicialización: Renderiza los productos al cargar el script
renderProducts();