document.getElementById('showMessagesBtn').addEventListener('click', function() {
    goToSection('section2');
});

document.getElementById('showExtraMessagesBtn').addEventListener('click', function() {
    alert('No has querido ver el mensaje.');
});

function goToSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
