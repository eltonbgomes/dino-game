const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
//console.log(dino);
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

function createCactus(){
    const cactus = document.createElement('div'); //gerar html para insercao na pagina index
    let cactusPosition = 1000;
    let randomTime = Math.random() * 4500;

    console.log(randomTime);

    cactus.classList.add('cactus'); //adiciona uma classe para 'cactus' para poder modificar com css
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); //adiciona o cactus no background

    //movimentando o cactus
    let leftInterval = setInterval(() => {
        if(cactusPosition < -70){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else{
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime); //cria um novo cactus com um tempo aleatorio
}

createCactus();

document.addEventListener('keydown', handleKeyDown); // identifica qualquer botao pressionado