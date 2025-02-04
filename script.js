function mostrarMensaje() {
    let mensaje = "💖 ¡Sabía que dirías que sí! Eres una persona increíble, y espero que hoy sea un día hermoso para ti. 🌹✨";
    let nuevaVentana = window.open("", "_blank", "width=400,height=300");
    nuevaVentana.document.write(`<h2 style="text-align:center;">${mensaje}</h2>`);
}
