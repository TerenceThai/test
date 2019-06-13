const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const body = document.getElementById('body')
const allContent = document.getElementById('allContent')

function burger() {

    hamburger.style.visibility = 'hidden'
    menu.style.visibility = 'visible'
    body.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(12, 12, 12, 0.90)), url("../../images/bg.jpg")'
    body.style["background-position"] = "right center"
    allContent.style.filter = 'blur(10px)'

}

function closeBurger() {
    
    hamburger.style.visibility = 'visible'
    menu.style.visibility = 'hidden'
    body.style.background = 'linear-gradient(to top, rgba(14, 15, 15, 0.803), rgba(2, 2, 2, 0.856)), url("../../images/bg.jpg")'
    body.style["background-position"] = "right center"
    allContent.style.filter = 'none'

}
