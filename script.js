//Chamando as constantes com base no HTML
const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

// colocando o circulo ativo como o primeiro //
let currentActive = 1


//Evento ao clicar no botão next //
next.addEventListener('click', () => {
    currentActive++ // Incremento no circulo ativo //

    if (currentActive > circles.length) { //manter active no maximo 4 // length é igual o total de circulos //
        currentActive = circles.length
    }
    update() //função chamada para habilitar os botões //
 
})

prev.addEventListener('click', () => {
    currentActive-- 

    if (currentActive < 1) { //manter active no maximo 4 //
        currentActive = 1 //se o active é menor que um, selecione o circulo 1 //
    }
    update() //função chamada para habilitar os botões //
  
})

function update () {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) { // se o index for menor que o circulo selecionando //
            circle.classList.add('active') // então adicione a class active //
        } else {
            circle.classList.remove('active') // se não remova a class active //
        }
    })

    const active = document.querySelectorAll('.active') //chamando a constante active para lidar com todos os actives //

    progress.style.width = (active.length -1) / (circles.length -1) * 100 + '%' // muda o estilo de width na classe progress
    // (quantidade de active - 1) / (quantidade de circulos -1) * 100 +'%' para aumentar ou diminuir a barrinha azul //

    if(currentActive === 1){ //habilitando os botões next e prev //
        prev.disabled = true; //se o circulo 1 está ativo, então prev está desativado //
    } else if(currentActive === circles.length){ // se o ativo foir o ultimo cartao //
        next.disabled = true; //então desabilite o botao next //
    } else { // se não estiver no primeiro e nem no ultimo então habilite os dois botões //
        prev.disabled = false 
        next.disabled = false
    }

}