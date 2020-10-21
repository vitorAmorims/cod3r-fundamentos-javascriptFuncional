function geradorDeNumeros(min,max,tempo) {
    if (min > max) {
        [min,max] = [max,min];
    }
    return new Promise(function (resolve) {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min) + min);
            resolve(aleatorio);
        },tempo)
    });
}
// geradorDeNumeros(1,60,4000).then(console.log); chamando a função

function gerarMatriz() {
    console.log("Aguarde o retorno de Promise!")
    const meuArray = Promise.all([ //promise.all - consigo chamar a função de interese.
        // posso trabalhar está variável, para obter aquilo que me interessa!
        geradorDeNumeros(1,60,5000), // paralelismo 
        geradorDeNumeros(1,60,1000), // posso pegar os dados de cliente
        geradorDeNumeros(1,60,500)  // pegar os dados de fornecedor ou produto
    ]) 
    return meuArray;
}
// console.log(gerarMatriz()); output pending

gerarMatriz().then(console.log);

