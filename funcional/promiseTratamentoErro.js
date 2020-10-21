//param valor pode ser qualquer coisa
//param chanceErro, deve ser um numero real entre 0 e 1
function funcionarOunao(valor, chanceErro) { 
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) { // condição if vai comparar o numero aleatório e o valor de chanceErro
            reject("Ocorreu um erro"); // se, chanceErro > valor aleatório
        } else {
            resolve(valor); //se, valor aleatório for maior chanceErro
        }
    })
}
funcionarOunao("testando...", 0.5)
.then(console.log);