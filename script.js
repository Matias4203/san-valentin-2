let attempts = 0;
const secretMessages = [
    "El amor es la clave de todo. 💖",
    "Cada día contigo es una bendición. 🌟",
    "Eres mi sol en días nublados. ☀️"
];
const correctUnlockCode = "420";
let revealedCode = "";

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
        }
    }, 1000);
}

function showUnlockCode() {
    goToSection('unlockSection');
}

function checkUnlockCode() {
    const inputCode = document.getElementById('unlockCodeInput').value;
    const unlockErrorMessage = document.getElementById('unlockErrorMessage');
    if (inputCode === correctUnlockCode) {
        goToSection('finalSurprise');
    } else {
        unlockErrorMessage.style.display = 'block';
    }
}

function revealSecretMessage() {
    const randomIndex = Math.floor(Math.random() * secretMessages.length);
    const secretMessage = secretMessages[randomIndex];
    alert(secretMessage);
}

function revealCode(number) {
    revealedCode += number;
    alert(`Parte del código revelado: ${number}`);
    if (revealedCode.length === 3) {
        alert(`Código completo revelado: ${revealedCode}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});
