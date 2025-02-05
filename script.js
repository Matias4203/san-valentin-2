// Array of 10 different messages for the "No" button
const mensajesNo = [
    "Ah, ya sabía que dirías que no.",
    "¡Oh, qué pena que no quieras verlo!",
    "¡Vamos, anímate, seguro te gusta!",
    "¡No te preocupes, está bien decir que no!",
    "¡Oh, parece que no estás interesado!",
    "¡No pasa nada, quizá la próxima vez!",
    "¡Entiendo, no siempre se puede querer!",
    "¡Vaya, me lo esperaba!",
    "¡Está bien, respeto tu decisión!",
    "¡Oh, qué lástima!"
];

// Function to show the modal with the special message for "Sí"
function mostrarMensajeSi() {
    var modal = document.getElementById('modal');
    var mensaje = document.getElementById('mensaje');
    mensaje.textContent = '💖 ¡Sabía que dirías que sí! Eres una persona increíble, y espero que hoy sea un día hermoso para ti. 🌹✨';
    modal.style.display = 'block';
}

// Function to show a random message when "No" button is clicked
function mostrarMensajeNo() {
    var modal = document.getElementById('modal');
    var mensaje = document.getElementById('mensaje');
    var randomIndex = Math.floor(Math.random() * mensajesNo.length);
    mensaje.textContent = mensajesNo[randomIndex];
    modal.style.display = 'block';
}

// Function to close the modal
function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
