document.addEventListener("DOMContentLoaded", function() {
    // Mostrar "Cargando..." por 3 segundos
    setTimeout(() => {
        document.getElementById('loadingSection').style.display = 'none';
        document.getElementById('errorSection').style.display = 'block';
        setTimeout(() => {
            document.getElementById('errorSection').style.display = 'none';
            document.getElementById('fakeIntro').style.display = 'block';
        }, 3000);
    }, 3000);
});

function showAds() {
    document.getElementById('fakeIntro').style.display = 'none';
    document.getElementById('adSection').style.display = 'block';
}

function showFakeError() {
    document.getElementById('adSection').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}

function goToSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showUnlockCode() {
    document.getElementById('unlockSection').style.display = 'block';
}

function checkUnlockCode() {
    const code = document.getElementById('unlockCodeInput').value;
    if (code === 'amor2025') {
        document.getElementById('unlockSection').style.display = 'none';
        document.getElementById('finalSurprise').style.display = 'block';
    } else {
        document.getElementById('unlockErrorMessage').style.display = 'block';
    }
}
