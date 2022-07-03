const prompt = require('prompt-sync')();
console.log("\n================================================================================");
console.log(`\nResumo:`);
console.log(`\nVocê é um ladrão conhecido mundialmente com 'Wolf' e está planejando um grande roubo, o alvo: o milhonário Fitz Roy.\nEle possui uma vasta coleção de arte e ela logo será sua...\n`);
console.log("================================================================================");

let contador = 0;
let novaEscolha;

function verificacao(escolha){
 
    if(escolha === 1 || escolha === 2){
        resposta(escolha);
    }else{
        while(true){

            console.log(`\nWolf, essa não é a resposta esperada...`);
            console.log(`| Digite: 1 p/ SIM  OU  Digite: 2 p/ NÃO | \n`);
            novaEscolha = +prompt(`Nova Resposta:`);
            
            if(novaEscolha === 1 || novaEscolha === 2){
                resposta(novaEscolha);
                break;
            }
        }

    }
}

function resposta(escolha) {
     if (escolha === 1) {
            console.log("Anotado Wolf!");
            contador++
    } else{
            console.log("Isso vai dificultar as coisas...");   
    }    
}



console.log(`| Digite: 1 p/ SIM  OU  Digite: 2 p/ NÃO |`);
console.log(`\nWolf, você conseguiu a planta da mansão do Fitz Roy?: `);
const pergunta01 = verificacao(+prompt(`Resposta:`));