let attempts = 0;
const secretMessages = [
    "El amor es la clave de todo. 💖",
    "Cada día contigo es una bendición. 🌟",
    "Eres mi sol en días nublados. ☀️"
];
const jokes = [
    "¿Sabes por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "Eres como el WiFi… cuando estás cerca, todo es mejor.",
    "Si fueras un dinosaurio, serías un ‘Romasaurio’ porque me tienes loco(a).",
    "¿Eres Google? Porque tienes todo lo que busco.",
    "Eres tan especial que si fueras una aplicación, serías la más descargada.",
    "¿Te duele la cara de ser tan bonito/a?",
    "Si fueras un vegetal, serías un bonito/a.",
    "¿Sabes qué es lo más lindo de hoy? Tú.",
    "Eres como un diccionario, das sentido a mi vida.",
    "¿Eres una lámpara? Porque iluminas mi día."
];
let seenJokes = new Set();

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

function showRandomJoke() {
    if (seenJokes.size === jokes.length) {
        document.getElementById('nextSectionBtn').style.display = 'block';
        return;
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (seenJokes.has(randomIndex));
    seenJokes.add(randomIndex);

    const jokeText = document.getElementById('jokeText');
    jokeText.textContent = jokes[randomIndex];

    if (seenJokes.size === jokes.length) {
        document.getElementById('nextSectionBtn').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    showRandomJoke();
});
