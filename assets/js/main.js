const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const body = document.getElementById('body')
const allContent = document.getElementById('allContent')

function burger() {

    hamburger.style.visibility = 'hidden'
    menu.style.visibility = 'visible'
    allContent.style.filter = 'blur(10px)'

}

function closeBurger() {

    hamburger.style.visibility = 'visible'
    menu.style.visibility = 'hidden'
    allContent.style.filter = 'none'

}
