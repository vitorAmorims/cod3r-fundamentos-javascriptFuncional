function funcionarOunao(valor, chanceErro, tempo) {
    console.log("Aguardando resultado da função:") 
    return new Promise((resolve, reject) => {
        try {
            con.log("Aguardando erro na função");
            setTimeout(() => {
                if (Math.random() < chanceErro) { 
                    reject("Ocorreu um erro"); 
                } else {
                    resolve(valor); 
                }
            }, tempo)
        } catch (e) {
            reject(e);
        }
    })
}
funcionarOunao("testando...", 0.5, 4000)
.then(value => `Valor: ${value}`)
.then(
    v => consol.log(v), 
err => console.log(`Erro Esp: ${err}`) //neste caso, estou incluindo um tratamento antes do método cath. Consigo, saber em qual then aconteceu o erro!
)
.catch(err => console.log(`Erro: ${err}`));
