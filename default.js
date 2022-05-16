const buttonEl = document.getElementById('generate-btn')
const password1El = document.getElementById('psswrd1')
const password2El = document.getElementById('psswrd2')
const password3El = document.getElementById('psswrd3')
const password4El = document.getElementById('psswrd4')
const inputEl = document.getElementById('input-el')
const errorP = document.getElementById('error-p')
let password = "";

let passwords = []


function copy1() {
    if (password1El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password1El.textContent)
    }
}

function copy2() {
    if (password2El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password2El.textContent)
    }
}

function copy3() {
    if (password3El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password3El.textContent)
    }
}

function copy4() {
    if (password4El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password4El.textContent)
    }
}


const allChars = [
    'A', 'B', 'C', 'D', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '=', '+'
]


buttonEl.onclick = function () {
    if (inputEl.value > 3 && inputEl.value < 51) {
        errorP.textContent = ''
        return createPasswords(),
            getNewPassword()
    } else if (inputEl.value < 4) {
        errorP.textContent = 'Insira um número maior que 3*'
    } else {
        errorP.textContent = 'Insira um número menor 50*'
    }
}

function getRandomChar() {
    return allChars[Math.floor(Math.random() * allChars.length)]
}

function createPasswords() {
    let passwordCreationArray = [""]
    if (inputEl.value >= 4) {
        for (let i = 0; i <= inputEl.value; i++) {
            passwordCreationArray.push(getRandomChar())
            password += passwordCreationArray[i]
        }
    }
    return password
}


function getNewPassword() {
    passwords = []
    password = ''
    let newPassword = ''
    for (let i = 0; i < 5; i++) {
        newPassword = createPasswords()
        passwords.push(newPassword)
        password = ''
    }
    return createPasswords(),
        renderPassword()
}

function renderPassword() {
    password1El.textContent = passwords[0]
    password2El.textContent = passwords[1]
    password3El.textContent = passwords[2]
    password4El.textContent = passwords[3]

    password1El.style.color = 'rgb(56, 225, 169)'
    password2El.style.color = 'rgb(56, 225, 169)'
    password3El.style.color = 'rgb(56, 225, 169)'
    password4El.style.color = 'rgb(56, 225, 169)'
    password1El.style.fontSize = '15px'
    password2El.style.fontSize = '15px'
    password3El.style.fontSize = '15px'
    password4El.style.fontSize = '15px'
}