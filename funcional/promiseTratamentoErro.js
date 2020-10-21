function funcionarOunao(valor, chanceErro, tempo) {
    console.log("Aguardando resultado da função:") 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < chanceErro) { 
                reject("Ocorreu um erro"); 
            } else {
                resolve(valor); 
            }
        }, tempo)
    })
}
funcionarOunao("testando...", 0.5, 4000)
.then(console.log)
.catch(error => console.log(`Erro: ${error}`));
// Nota: depois do cath, não tenho mais dados...