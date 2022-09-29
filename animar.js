
const menuDiv = document.getElementById('menu-mobile')
const btnanimar = document.getElementById('btn-menu')
const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

menuDiv.addEventListener('click', animar)


function animar(){
    menuDiv.classList.toggle('abrir')
    btnanimar.classList.toggle('ativo')
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
}

/*
window.onscroll=function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
         nav.classList.add("fixoNoTopo")
    }
    else{
        nav.classList.remove("fixoNoTopo")
    }
}
*/