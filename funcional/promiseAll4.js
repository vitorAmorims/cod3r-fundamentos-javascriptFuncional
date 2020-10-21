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
