const password1StyleEl = document.getElementById('psswrd1')
const password2StyleEl = document.getElementById('psswrd2')
const password3StyleEl = document.getElementById('psswrd3')
const password4StyleEl = document.getElementById('psswrd4')

password1StyleEl.onmouseover = function () {
    if (password1StyleEl.textContent === '...') {
    } else {
        password1StyleEl.style.cursor = 'pointer'
        password1StyleEl.style.color = 'white'
        password1StyleEl.title = 'Copiar para área de tranferencia'
    }
}

password1StyleEl.onmouseleave = function () {
    if (password1StyleEl.textContent === '...') {
    } else {
        password1StyleEl.style.cursor = 'pointer'
        password1StyleEl.style.color = 'rgb(56, 225, 169)'
    }
}

password2StyleEl.onmouseover = function () {
    if (password2StyleEl.textContent === '...') {
    } else {
        password2StyleEl.style.cursor = 'pointer'
        password2StyleEl.style.color = 'white'
        password2StyleEl.title = 'Copiar para área de tranferencia'
    }
}

password2StyleEl.onmouseleave = function () {
    if (password2StyleEl.textContent === '...') {
    } else {
        password2StyleEl.style.cursor = 'pointer'
        password2StyleEl.style.color = 'rgb(56, 225, 169)'
    }
}

password3StyleEl.onmouseover = function () {
    if (password3StyleEl.textContent === '...') {
    } else {
        password3StyleEl.style.cursor = 'pointer'
        password3StyleEl.style.color = 'white'
        password3StyleEl.title = 'Copiar para área de tranferencia'
    }
}

password3StyleEl.onmouseleave = function () {
    if (password3StyleEl.textContent === '...') {
    } else {
        password3StyleEl.style.cursor = 'pointer'
        password3StyleEl.style.color = 'rgb(56, 225, 169)'
    }
}

password4StyleEl.onmouseover = function () {
    if (password4StyleEl.textContent === '...') {
    } else {
        password4StyleEl.style.cursor = 'pointer'
        password4StyleEl.style.color = 'white'
        password4StyleEl.title = 'Copiar para área de transferencia'
    }
}

password4StyleEl.onmouseleave = function () {
    if (password4StyleEl.textContent === '...') {
    } else {
        password4StyleEl.style.cursor = 'pointer'
        password4StyleEl.style.color = 'rgb(56, 225, 169)'
    }
}
