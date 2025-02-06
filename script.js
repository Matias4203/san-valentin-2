// Obtener los modales
var modal = document.getElementById("myModal");
var extraModal = document.getElementById("extraModal");

// Obtener los botones que abren los modales
var btn = document.getElementById("showMessagesBtn");
var extraBtn = document.getElementById("showExtraMessagesBtn");

// Función para abrir el modal con mensaje bonito
btn.onclick = function() {
    modal.style.display = "block"; // Muestra el modal
}

// Función para cerrar los modales
function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Cierra el modal especificado
}

// Función para cerrar los modales cuando se hace clic fuera de ellos
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";   // Cierra el primer modal
    }
}

// Añadir funcionalidad de movimiento al botón 'No' cuando se toque
extraBtn.addEventListener('click', function() {
    extraBtn.style.position = 'absolute';
    extraBtn.style.left = Math.random() * (window.innerWidth - extraBtn.clientWidth) + 'px';
    extraBtn.style.top = Math.random() * (window.innerHeight - extraBtn.clientHeight) + 'px';
});
