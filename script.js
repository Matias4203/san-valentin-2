document.addEventListener("DOMContentLoaded", function() {
    // Temporizador de redirección en la sección de error
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        let countdown = 10;
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                goToSection('intro');
            }
        }, 1000);
    }

    // Mostrar la primera sección (loading -> intro)
    setTimeout(() => {
        goToSection('intro');
    }, 2000); // Simula carga de 2 segundos
});

// Función para cambiar de sección con animación
function goToSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    const newSection = document.getElementById(sectionId);
    if (newSection) {
        newSection.style.display = 'block';
        newSection.classList.add('fade-in'); // Agrega una clase para animación
    }
}

// Array de bromas
const jokes = [
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
    "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.",
    "¿Cómo se despiden las células? ¡Hasta la mitosis!"
];

function showRandomJoke() {
    const jokeText = document.getElementById('jokeText');
    const randomIndex = Math.floor(Math.random() * jokes.length);

    jokeText.classList.remove('fade-in');
    setTimeout(() => {
        jokeText.textContent = jokes[randomIndex];
        jokeText.classList.add('fade-in');
    }, 200);
}

// Preguntas y respuestas para la trivia
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
    if (currentQuestionIndex >= questions.length) {
        goToSection('messagesSection');
        return;
    }

    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];

    // Deshabilita los botones para evitar clics repetidos
    document.querySelectorAll('#optionsContainer .btn').forEach(btn => {
        btn.disabled = true;
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 500);

    document.getElementById('score').textContent = score;
}

// Mensajes secretos
const messages = [
    "Eres mi razón de ser.",
    "Contigo, todo es mejor.",
    "Eres la persona más especial de mi vida.",
    "Cada día contigo es una bendición.",
    "No imagino mi vida sin ti."
];

function revealMessage(element) {
    if (messages.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    element.textContent = messages[randomIndex];
    element.classList.add('revealed'); // Agrega una clase para efecto visual

    // Elimina el mensaje del array para que no se repita
    messages.splice(randomIndex, 1);
}

// Código de desbloqueo para la sorpresa final
function checkUnlockCode() {
    const code = document.getElementById('unlockCodeInput').value;
    if (code === 'amor2025') {
        document.getElementById('unlockSection').style.display = 'none';
        document.getElementById('finalSurprise').style.display = 'block';
    } else {
        document.getElementById('unlockErrorMessage').style.display = 'block';
    }
}
