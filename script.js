// Obtener los modales
var modal = document.getElementById("myModal");
var extraModal = document.getElementById("extraModal");

// Obtener los botones que abren los modales
var btn = document.getElementById("showMessagesBtn");
var extraBtn = document.getElementById("showExtraMessagesBtn");

// Array de mensajes bonitos
var messages = [
    "¡Tú eres la razón por la que sonrío todos los días!",
    "Eres mi sol en los días nublados.",
    "Siempre en mi mente, en mi corazón y en mis sueños.",
    "A tu lado todo es mejor. ¡Feliz San Valentín!",
    "La mejor parte de mi vida es tenerte a ti."
];

// Array de mensajes graciosos
var extraMessages = [
    "Ah, yo sabía que no querías, pero seguro que no cambias de opinión.",
    "¿Vas a decir que no? ¡Lo sabía! Pero no puedo resistir verte sonreír.",
    "No soy experto en amor, pero tú y yo juntos, eso sí que tiene sentido.",
    "¿Sabías que todos los caminos llevan a Roma? Bueno, los míos siempre me llevan a ti.",
    "Te dije que no querías, pero seguro que lo sabes, ¿verdad?"
];

// Función para abrir el primer modal con mensaje bonito
btn.onclick = function() {
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("modalMessages").innerText = randomMessage;
    modal.style.display = "block"; // Muestra el primer modal
}

// Función para abrir el segundo modal con mensajes graciosos
extraBtn.onclick = function() {
    var randomMessage = extraMessages[Math.floor(Math.random() * extraMessages.length)];
    document.getElementById("modalExtraMessages").innerText = randomMessage;
    extraModal.style.display = "block"; // Muestra el segundo modal
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
    if (event.target == extraModal) {
        extraModal.style.display = "none"; // Cierra el segundo modal
    }
}
