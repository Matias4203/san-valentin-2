let attempts = 0;
const secretMessages = [
    "El amor es la clave de todo. 💖",
    "Cada día contigo es una bendición. 🌟",
    "Eres mi sol en días nublados. ☀️"
];
const jokes = [
    "Feliz San Valentín… o como yo lo llamo: ‘otro día más en el que te aguanto’.",
    "Dicen que el amor es ciego, pero lo nuestro ya es ceguera total.",
    "Eres mi persona favorita… para molestar todos los días.",
    "En este 14 de febrero, quiero agradecerte por siempre estar ahí… aunque a veces desaparezcas más rápido que mi dinero.",
    "Hoy es el día del amor y la amistad… pero como lo tuyo conmigo es más dudas existenciales, dejémoslo en ‘feliz día’ nomás.",
    "Dicen que en San Valentín hay que regalar chocolates… así que dime, ¿me los vas a dar tú o los compro yo y me los como solo?",
    "Feliz día de la amistad… o lo que sea que tengamos. 🤨",
    "Si el amor entra por el estómago, entonces creo que mi amor por la comida sigue ganando.",
    "Prometo no hacerte enojar hoy… bueno, al menos hasta después de comer.",
    "No necesito regalo de San Valentín… con que no me ignores, ya me doy por bien servido.",
    "Si cobrara por cada vez que me ignoras, ya tendría para comprarme otra moto… y no te invitaría a dar la vuelta 😌",
    "Si fuera por mí, te haría un monumento… pero el cemento está caro, así que mejor te compro unas papitas.",
    "Feliz 14 de febrero, oficialmente el único día del año en que no te voy a molestar… ok, mentira, ya sabes que eso no es posible.",
    "Dicen que el amor es dar sin esperar nada a cambio… así que dame chocolate y no esperes que te comparta.",
    "Si el 14 de febrero es de los enamorados y el 15 de los solteros… ¿qué día es para los que estamos en una relación de 'a ver qué pasa'?"
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
