


let btn = document.querySelector(".mostrarMenu");

function mostrar(){
    const menu = document.querySelector('.lista');
    menu.classList.toggle('active') ;
}

btn.addEventListener('click',mostrar);


let btn2 = document.querySelector(".toggle");

function menuBurg(){
    const menu = document.querySelector('.barsX');
    menu.classList.toggle('active') ;
}

btn.addEventListener('click',menuBurg);
