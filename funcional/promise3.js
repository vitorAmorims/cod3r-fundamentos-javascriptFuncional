function geradorDeNumeros(min,max) {
    if (min > max) {
        [min,max] = [max,min];
    }
    return new Promise(function (resolve) {
        const aleatorio = parseInt(Math.random() * (max - min) + min);
        resolve(aleatorio);
    });
}


function numeroX10(valor) {
    return valor * 10;
}

geradorDeNumeros(10,20)
.then(numeroX10)
.then(numeroX10 => `O número gerado foi ${numeroX10}`)
.then(console.log);
