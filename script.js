function mostrarMensaje() {
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function moverNo() {
    var botonNo = document.getElementById("no");
    var maxX = window.innerWidth - botonNo.offsetWidth;
    var maxY = window.innerHeight - botonNo.offsetHeight;

    var posX = Math.random() * maxX;
    var posY = Math.random() * maxY;

    botonNo.style.left = posX + "px";
    botonNo.style.top = posY + "px";
}

function noSeleccionado() {
    alert("¡Parece que preferiste no elegir el botón! Elige 'Sí' para ver el mensaje.");
}
