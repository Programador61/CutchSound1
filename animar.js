
const menuDiv = document.getElementById('menu-mobile')
const btnanimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)


function animar(){
    menuDiv.classList.toggle('abrir')
    btnanimar.classList.toggle('ativo')
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
}
