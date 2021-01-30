const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
//console.log(dino);
let DinoPosition = 0;
let isJumping = false;

function handleKeyDown(event){ //funcao para funcionar apenas com o espaco pressionado
    if(event.keyCode === 32){
        console.log("Pressionou espaço");
        if(!isJumping){
            jump();
        }
    }
}

function jump(){ //funcao que fará o dino pular
    isJumping = true;

    let upInterval = setInterval(() => { //atualiza a cada 30 ms
        if(DinoPosition >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if(DinoPosition <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    DinoPosition -= 20;
                    dino.style.bottom = DinoPosition + 'px';
                }
            }, 30); //atualiza a cada 20 ms
        }else{
            //subindo
            DinoPosition += 20;
            dino.style.bottom = DinoPosition + 'px';
        }
    }, 30);
}

function createCactus(){
    const cactus = document.createElement('div'); //gerar html para insercao na pagina index
    let cactusPosition = 1300;
    let randomTime = 0;
    do{
        randomTime = Math.random() * 3000;
    }while(randomTime < 600); //impede que os cactus fiquem muito proximos

    console.log(randomTime);

    cactus.classList.add('cactus'); //adiciona uma classe para 'cactus' para poder modificar com css
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus); //adiciona o cactus no background

    //movimentando o cactus
    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && DinoPosition < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else{
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime); //cria um novo cactus com um tempo aleatorio
}

createCactus();

document.addEventListener('keydown', handleKeyDown); // identifica qualquer botao pressionado
