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
// let numeros = [1,2,3,4,5,6];
function numerosPares(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
// console.log(numerosPares(numeros));

console.time("promise")
gerarMatriz()
.then(numerosPares)
.then(console.log)
.then(() => {
    console.timeEnd('promise');
});
