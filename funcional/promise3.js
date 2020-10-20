function geradorDeNumeros(min,max) {
    if (min > max) {
        [min,max] = [max,min];
    }
    return new Promise(function (resolve) {
        const aleatorio = parseInt(Math.random() * (max - min) + min);
        resolve(aleatorio);
    });
}
let numeros = [];

geradorDeNumeros(10,20)
.then((valor) => console.log(valor))
.then(function(valor) {
    numeros.push(valor)
})

