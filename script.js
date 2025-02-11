document.getElementById('showMessagesBtn').addEventListener('click', function() {
    goToSection('section2');
    showHearts();
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

function showHearts() {
    const hearts = document.createElement('div');
    hearts.className = 'hearts';
    document.body.appendChild(hearts);
    setTimeout(() => {
        document.body.removeChild(hearts);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const hiddenMessage = document.querySelector('.hidden-message');
    hiddenMessage.addEventListener('mouseover', function() {
        hiddenMessage.style.display = 'block';
    });
});
