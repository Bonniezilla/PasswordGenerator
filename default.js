//All necessary HTML elements
const formEl = document.querySelector('form');
const passwordsEl = document.querySelector('.passwordDiv');
const inputEl = document.getElementById('input-el');
const errorP = document.getElementById('errorP');

// All available characters
const allChars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '"', '#',  '$',  '%',  '&' ,"'", '(', ')', '*' ,
    '+', ',', '-', '.', '/', ':', ';' ,'<', '=', '>', '?', 
    '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'    
];

// Function on submit to generate and render passwords
formEl.onsubmit = (e) => {
    e.preventDefault();
    if (inputEl.value >= 5 && inputEl.value <= 35) {
        errorP.style.display = "none";
        renderPassword();
    } else {
        errorP.style.display = "flex"
    }
}

// Function on click to require copy() function
passwordsEl.onclick = (e) => {
    if(e.target != passwordsEl && e.target.value != "") {
        copy(e.target);
    }
}

// Copy function
function copy(password) {
    alert(`Copiado com sucesso ${password.value}`);
    password.select();
    navigator.clipboard.writeText(password.value);
}

// Function to retunr a random char
function getRandomChar() {
    let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    if (Boolean(Math.random() < 0.5)) {
        randomChar = randomChar.toUpperCase();
    }
    return randomChar;
}

// Function to generate a single random password and return
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

// Function to render the passwords
function renderPassword() {
    for (let i = 0; i < passwordsEl.children.length; i++) {
        passwordsEl.children.item(i).value = createPassword();
        passwordsEl.children.item(i).title = "Clique para copiar para a área de transferencia";
        passwordsEl.children.item(i).style.cursor = "pointer;"
    }
}