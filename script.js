const dino = document.querySelector('.dino');
//console.log(dino);
let isJumping = false;

function handleKeyUp(event){ //funcao para funcionar apenas com o espaco pressionado
    if(event.keyCode === 32){
        console.log("Pressionou espaço");
        if(!isJumping){
            jump();
        }
    }
}

function jump(){ //funcao que fará o dino pular
    let position = 0;
    isJumping = true;

    let upInterval = setInterval(() => { //atualiza a cada 20 ms
        if(position >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20); //atualiza a cada 20 ms
        }else{
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp); // identifica qualquer botao pressionado