const formEl = document.querySelector('form');
const passwordsEl = document.querySelectorAll('.password');
const inputEl = document.getElementById('input-el');
const errorP = document.getElementById('errorP');

const allChars = [
    'A', 'B', 'C', 'D', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '=', '+'
]

formEl.onsubmit = (e) => {
    e.preventDefault();
    if (inputEl.value >= 5 && inputEl.value <= 35) {
        errorP.style.display = "none";
        renderPassword();
    } else {
        errorP.style.display = "flex"
    }
}

function copy(password) {
    alert(`Copiado com sucesso ${passwordsEl[password].value}`);
    passwordsEl[password].select();
    navigator.clipboard.writeText(passwordsEl[password].value);
}

function getRandomChar() {
    return allChars[Math.floor(Math.random() * allChars.length)]
}

function createPassword(value = inputEl.value) {
    let password = "";
    let passwordCreationArray = [""];
    if (value >= 4) {
        for (let i = 0; i <= value; i++) {
            passwordCreationArray.push(getRandomChar())
            password += passwordCreationArray[i];
        }
    }
    return password;
}

function renderPassword() {
    for (let i = 0; i < 4; i++) {
        passwordsEl[i].value = createPassword();
        passwordsEl[i].title = "Clique para copiar para a área de transferencia";
        passwordsEl[i].style.cursor = "pointer;"
    }
}