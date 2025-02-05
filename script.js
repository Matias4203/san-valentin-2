// Function to show the modal with the special message
function mostrarMensaje() {
    var modal = document.getElementById('modal');
    var mensaje = document.getElementById('mensaje');
    mensaje.textContent = '💖 ¡Sabía que dirías que sí! Eres una persona increíble, y espero que hoy sea un día hermoso para ti. 🌹✨';
    modal.style.display = 'block';
}

// Function to close the modal
function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to move the "No" button to a random position
function moverNo() {
    var noButton = document.getElementById('no');
    var container = document.querySelector('.container');

    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    // Generate random positions within the container bounds
    var randomX = Math.floor(Math.random() * (containerWidth - noButton.offsetWidth));
    var randomY = Math.floor(Math.random() * (containerHeight - noButton.offsetHeight));

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Function to handle the "No" button click
function noSeleccionado() {
    alert("¡Oh! Parece que no quieres ver el mensaje especial. 😢");
}
