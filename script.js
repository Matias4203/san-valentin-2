function mostrarSorpresa() {
    document.getElementById("sorpresa").classList.remove("oculto");
}

function moverBoton() {
    let btnNo = document.getElementById("btnNo");
    let x = Math.random() * (window.innerWidth - btnNo.clientWidth);
    let y = Math.random() * (window.innerHeight - btnNo.clientHeight);
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}
