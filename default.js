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
        navigator.clipboard.writeText(password1El.value)
    }
}

function copy2() {
    if (password2El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password2El.value)
    }
}

function copy3() {
    if (password3El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password3El.value)
    }
}

function copy4() {
    if (password4El.textContent === '...') {
    } else {
        navigator.clipboard.writeText(password4El.value)
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
    password1El.value = passwords[0]
    password2El.value = passwords[1]
    password3El.value = passwords[2]
    password4El.value = passwords[3]

    password1El.className = 'passwords-el' 
    password2El.className = 'passwords-el'
    password3El.className = 'passwords-el'
    password4El.className = 'passwords-el'
}