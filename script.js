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
let revealedCode = "";
let reflexAttempts = 0;
let motionUnlocked = false;

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
    if (sectionId === 'errorSection') {
        startCountdown();
    }
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
            document.getElementById('errorSection').innerHTML = `
                <h1>Tranquilo, no te vas a librar de mí tan fácil. Ya me tienes aquí 😏</h1>
                <button class="btn" onclick="goToSection('intro')">Continuar</button>
            `;
        }
    }, 1000);
}

function startReflexTest() {
    reflexAttempts = 0;
    showReflexButton();
}

function showReflexButton() {
    const reflexMessage = document.getElementById('reflexMessage');
    reflexMessage.style.display = 'none';
    const button = document.createElement('button');
    button.textContent = '¡Tócame!';
    button.className = 'btn reflex-btn';
    button.style.position = 'absolute';
    button.style.top = `${Math.random() * 80 + 10}%`;
    button.style.left = `${Math.random() * 80 + 10}%`;
    button.onclick = () => {
        document.body.removeChild(button);
        reflexAttempts++;
        if (reflexAttempts >= 3) {
            reflexMessage.textContent = '¡Buena! Tienes buenos reflejos. Bienvenido.';
            reflexMessage.style.color = 'green';
            reflexMessage.style.display = 'block';
            goToSection('restrictedSectionUnlocked');
        } else {
            showReflexButton();
        }
    };
    document.body.appendChild(button);
    setTimeout(() => {
        if (document.body.contains(button)) {
            document.body.removeChild(button);
            reflexMessage.textContent = 'Tus reflejos no son lo suficientemente rápidos. Inténtalo de nuevo.';
            reflexMessage.style.color = 'red';
            reflexMessage.style.display = 'block';
        }
    }, 1000);
}

function startMotionSensorTest() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation);
    } else {
        alert("Tu dispositivo no soporta el sensor de movimiento.");
    }
}

function handleOrientation(event) {
    const motionMessage = document.getElementById('motionMessage');
    const gamma = event.gamma; // Incline left to right
    if (gamma > 30 || gamma < -30) { // Adjust the threshold as needed
        motionMessage.textContent = 'Bien, tienes la clave del movimiento. Bienvenido.';
        motionMessage.style.display = 'block';
        window.removeEventListener('deviceorientation', handleOrientation);
        goToSection('restrictedSectionUnlocked');
    }
}

function showUnlockCode() {
    goToSection('unlockSection');
}

function checkUnlockCode() {
    const inputCode = document.getElementById('unlockCodeInput').value;
    const unlockErrorMessage = document.getElementById('unlockErrorMessage');
    if (inputCode === revealedCode) {
        goToSection('finalSurprise');
    } else {
        unlockErrorMessage.style.display = 'block';
    }
}

function revealSecretMessage() {
    const randomIndex = Math.floor(Math.random() * secretMessages.length);
    const secretMessage = secretMessages[randomIndex];
    const secretMessageElement = document.getElementById('secretMessage');
    secretMessageElement.textContent = secretMessage;
    secretMessageElement.style.display = 'block';
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
        document.getElementById('anotherJokeBtn').style.display = 'none';
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
        document.getElementById('anotherJokeBtn').style.display = 'none';
        document.getElementById('nextSectionBtn').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showRandomJoke();
    setupCamera();
});

async function setupCamera() {
    const video = document.getElementById('video');
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;

    video.onloadedmetadata = () => {
        video.play();
        startFaceDetection();
    };
}

async function startFaceDetection() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/models');

    const video = document.getElementById('video');
    const canvas = faceapi.createCanvasFromMedia(video);
}
