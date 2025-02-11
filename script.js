body, html {
    height: 100%;
    margin: 0;
    font-family: 'Pacifico', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #ff9a9e 0%, #ff6a88 50%, #fad0c4 100%);
    background-attachment: fixed;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

body {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
}

.container {
    text-align: center;
    margin: 20px;
}

.section {
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background: linear-gradient(to right, #ff6a00, #ee0979);
    color: white;
    border: none;
    border-radius: 25px;
    transition: transform 0.2s, background 0.2s;
}

button:hover {
    background: linear-gradient(to right, #ee0979, #ff6a00);
    transform: scale(1.1);
}

button:active {
    animation: vibrate 0.2s linear infinite;
}

@keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(2px); }
    50% { transform: translateX(0); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.hearts {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: url('heart.png') repeat;
    background-size: 50px 50px;
    animation: hearts 10s linear infinite;
}

@keyframes hearts {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
}

.hidden-message {
    display: none;
    animation: revealText 3s forwards;
    opacity: 0;
}

@keyframes revealText {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    text-align: center;
}

#welcomeMessage:hover {
    color: #ff6a88;
    transition: color 0.5s;
}

#welcomeMessage:active {
    color: #fad0c4;
    transition: color 0.2s;
}

.hidden-area {
    cursor: pointer;
    display: inline-block;
    margin-top: 20px;
    font-size: 24px;
}
