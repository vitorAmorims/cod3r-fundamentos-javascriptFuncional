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
    const meuArray = Promise.all([ // pode-se agrupar as informações em única constante ou variável. 
        geradorDeNumeros(1,60,5000), //ex: aqui trouxe informações de clientes  
        geradorDeNumeros(1,60,1000), //ex: aqui trouxe informações de produtos 
        geradorDeNumeros(1,60,500)  
    ]) 
    return meuArray;
}
// console.log(gerarMatriz()); output pending
console.time("promise")
gerarMatriz()
.then(console.log)
.then(() => {
    console.timeEnd('promise');
});
