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
    return Promise.all([ //promise.all - consigo chamar a função de interese.
        geradorDeNumeros(1,60,5000), 
        geradorDeNumeros(1,60,1000),
        geradorDeNumeros(1,60,500) //somente traz o resultado quando a Promise, estiver cumprida.
    ])
}
// console.log(gerarMatriz()); output pending

gerarMatriz().then(console.log);

