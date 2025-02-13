document.addEventListener("DOMContentLoaded", function() {
    // Mostrar "Cargando..." por 3 segundos y luego pasar a la introducción
    setTimeout(() => {
        document.getElementById('loadingSection').style.display = 'none';
        document.getElementById('intro').style.display = 'block';
    }, 3000);

    // Temporizador de redirección en la sección de error
    let countdown = 10;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            goToSection('intro');
        }
    }, 1000);
});

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
        document.getElementById('finalSection').style.display = 'block';
    } else {
        document.getElementById('unlockErrorMessage').style.display = 'block';
    }
}

// Array de bromas
const jokes = [
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas."
];

function showRandomJoke() {
    const jokeText = document.getElementById('jokeText');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
}

// Array de preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es mi color favorito?",
        options: ["Rojo", "Azul", "Verde"],
        correctAnswer: "Azul"
    },
    {
        question: "¿Cuántas veces te he dicho que me caes bien?",
        options: ["Muchas", "Pocas", "Nunca"],
        correctAnswer: "Muchas"
    },
    {
        question: "Si tuvieras que describirme en una palabra, ¿cuál sería?",
        options: ["Increíble", "Genial", "Impresionante"],
        correctAnswer: "Increíble"
    }
];

let score = 0;
let currentQuestionIndex = 0;

function showQuestion() {
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        goToSection('messagesSection');
    }

    document.getElementById('score').textContent = score;
}

// Mensajes secretos
const messages = [
    "Eres mi razón de ser.",
    "Contigo, todo es mejor.",
    "Eres la persona más especial de mi vida."
];

function revealMessage(element) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    element.textContent = messages[randomIndex];
    element.style.pointerEvents = 'none';
}
