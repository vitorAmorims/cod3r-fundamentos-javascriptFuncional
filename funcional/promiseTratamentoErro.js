function funcionarOunao(valor, chanceErro, tempo) {
    console.log("Aguardando resultado da função:") //console.log() síncrono 
    return new Promise((resolve, reject) => {
        setTimeout(() => { // inserido método setTimeout(), para resultado assincrono.
            if (Math.random() < chanceErro) { 
                reject("Ocorreu um erro"); 
            } else {
                resolve(valor); 
            }
        }, tempo)
    })
}
funcionarOunao("testando...", 0.5, 4000)
.then(console.log) //até aqui, o erro está sendo tratado pelo node
.catch(error => console.log(`Erro: ${error}`)); // inserido método .cath para tratamento de erro na Promise.