const prompt = require('prompt-sync')();
console.log("\n================================================================================");
console.log(`Resumo:`);
console.log(`\nVocê é um ladrão conhecido mundialmente com 'Wolf' e está planejando um grande roubo, o alvo: o maior traficante de armas, Fitz Roy.\nEle possui uma vasta coleção de arte e ela logo será nossa...`);
console.log(`\nEu sou a Night Fox e estou aqui na te ajudar na elaboração do roubo.`);
console.log(`\nO roubo irá acontecer na festa de fim de ano do Fitz Roy, onde centenas de convidados vão estar presentes e iremos nos inflitrar nela.`);
console.log(`\nSó espero que seu orgulho não o deixe descuidado com os prepaprativos...`);
console.log("==================================================================================");

let contador = 0;
let novaEscolha;

function verificacao(escolha){
    if(escolha === 1 || escolha === 2){
        resposta(escolha);
    }else{
        while(true){
            console.log(`\nNF: Wolf, essa não é a resposta esperada...`);
            novaEscolha = +prompt(`Wolf:`);
            
            if(novaEscolha === 1 || novaEscolha === 2){
                resposta(novaEscolha);
                break;
            }
        }
    }
}

function resposta(escolha) {
    if (escolha === 1) {
        console.log("Wolf: Sim, tudo certo!")
        console.log("NF: Anotado Wolf!");
        contador++
    } else{
        console.log("NF: Isso vai dificultar as coisas...");   
        console.log("Wolf: Não se preoucupe tanto Fox, somos os melhores!");
    }    
}

console.log(`| Digite: 1 p/ SIM  OU  Digite: 2 p/ NÃO |`);
console.log(`\nNF: Wolf, você conseguiu a planta da mansão do Fitz Roy?`);
const pergunta01 = verificacao(+prompt(`Wolf: `));
console.log(`\nNF: Wolf, você já analisou a rotina dos guardas da mansão?`);
const pergunta02 = verificacao(+prompt(`Wolf: `));
console.log(`\nNF: Tudo certo com relação aos equipamentos?`);
const pergunta03 = verificacao(+prompt(`Wolf: `));
console.log(`\nNF: Os convites para a festa estão prontos?`);
const pergunta04 = verificacao(+prompt(`Wolf: `));
console.log(`\nNF: A rota de fulga foi elaborada?`);
const pergunta05 = verificacao(+prompt(`Wolf: `));

if (contador <= 2){
    console.log(`\nNF: Você relaxou de mais com o plano e lógico que ele daria errado! Fitz Roy nós predeu e só Deus sabe o que ele vai fazer com a gente!`);
}else if (contador === 3){
    console.log(`\nNF: O plano falhou, mas ao menos conseguimos fungir. Infelizmente Fitz Roy nós indentificou e agora vai nós caçar até a nossa morte!`);
}else if (contador === 4 ){
    console.log(`\nNF: Tivemos alguns problemas, mas conseguimos roubar 40% do acervo de Fitz Roy.`);
}else{
    console.log(`\nNF: Conseguimos roubar 100% do acervo de Fizt Roy e agora estamos milhonários!`);
}
