const dino = document.querySelector('.dino');
//console.log(dino);

function handleKeyUp(event){ //funcao para funcionar apenas com o espaco pressionado
    if(event.keyCode === 32){
        console.log("Pressionou espaço");
    }
}

document.addEventListener('keyup', handleKeyUp); // identifica qualquer botao pressionado