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

// Array de preguntas relacionadas
var questions = [
    "¿Cuál es tu color favorito?",
    "¿Cuál es tu película romántica favorita?",
    "¿Qué te gusta hacer en tu tiempo libre?",
    "¿Cuál es tu lugar favorito para visitar?",
    "¿Qué te hace feliz?"
];

// Función para abrir el modal con mensaje bonito
btn.onclick = function() {
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("modalMessages").innerText = randomMessage;
    modal.style.display = "block"; // Muestra el modal
}

// Función para abrir el modal con una pregunta
extraBtn.onclick = function() {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("modalExtraMessages").innerText = randomQuestion;
    extraModal.style.display = "block"; // Muestra el modal
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
