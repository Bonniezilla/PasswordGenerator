const buttonEl = document.getElementById('generate-btn')
const passwordDivEl = document.getElementById('passwordDiv')
const inputEl = document.getElementById('input-el')
const errorP = document.getElementById('error-p')

const allChars = [
    'A', 'B', 'C', 'D', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '=', '+'
]

let password = "";

let passwords = []

buttonEl.onclick = () => {
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
    passwordDivEl.firstChild.textContent = passwords[0]
    passwordDivEl.lastChild.textContent = passwords[3]

    passwordDivEl.firstChild.style.color = 'rgb(56, 225, 169)'
    passwordDivEl.firstChild.style.fontSize = '15px'
    passwordDivEl.lastChild.style.fontSize = '15px'
    passwordDivEl.lastChild = 'rgb(56, 225, 169)'
}