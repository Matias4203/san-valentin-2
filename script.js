document.getElementById('showMessagesBtn').addEventListener('click', function() {
    goToSection('section2');
    showHearts();
    localStorage.setItem('agreedToSeeMessage', 'true');
});

document.getElementById('showExtraMessagesBtn').addEventListener('click', function() {
    showModal();
});

document.getElementById('modalYesBtn').addEventListener('click', function() {
    displayErrorMessage();
    closeModal();
    setTimeout(() => {
        goToSection('section2');
        showHearts();
        localStorage.setItem('agreedToSeeMessage', 'true');
    }, 100); // Small delay to show the error message
});

document.getElementById('modalNoBtn').addEventListener('click', function() {
    closeModal();
    setTimeout(showModal, 100); // Small delay to prevent modal flicker
});

function goToSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function showHearts() {
    const hearts = document.createElement('div');
    hearts.className = 'hearts';
    document.body.appendChild(hearts);
    setTimeout(() => {
        document.body.removeChild(hearts);
    }, 5000);
}

function displayErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'ERROR AL MOSTRAR EL MENSAJE';
}

function startCountdown() {
    let countdown = 10;
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            goToSection('intro');
            startAdditionalErrors();
        }
    }, 1000);
}

function startAdditionalErrors() {
    setTimeout(() => {
        alert("Error: No se puede cargar el contenido.");
    }, 5000);

    setTimeout(() => {
        alert("Error: Conexión perdida. Intentando reconectar...");
    }, 10000);

    setTimeout(() => {
        alert("Broma: ¡Todo está bien! 😄");
    }, 15000);
}

document.addEventListener('DOMContentLoaded', function() {
    const hiddenMessage = document.querySelector('.hidden-message');
    const hiddenArea = document.getElementById('hiddenArea');
    const finalHiddenArea = document.getElementById('finalHiddenArea');
    const finalSecretMessage = document.getElementById('finalSecretMessage');
    
    hiddenArea.addEventListener('mouseover', function() {
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.opacity = '1';
    });

    hiddenArea.addEventListener('touchstart', function() {
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.opacity = '1';
    });

    finalHiddenArea.addEventListener('mouseover', function() {
        finalSecretMessage.style.display = 'block';
        finalSecretMessage.style.opacity = '1';
    });

    finalHiddenArea.addEventListener('touchstart', function() {
        finalSecretMessage.style.display = 'block';
        finalSecretMessage.style.opacity = '1';
    });

    startCountdown();
});
