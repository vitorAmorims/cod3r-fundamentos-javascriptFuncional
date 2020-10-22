function esperarPor(tempo = 3000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
    
}

/*Devido param default na função esperarPor, o output será 1 console.log à cada 3 segundos.
*/

// esperarPor(3000) 
// .then(() => console.log("Executando promise 1..."))
// .then(esperarPor)
// .then(() => console.log("Executando promise 2..."))
// .then(esperarPor)
// .then(() => console.log("Executando promise 3..."));

// await esperarPor()  erro: await is only async function

// vamos fazer essa chamadas de funções aninhadas com async/await
/*
A idéia principal, de async/await é código parece sincrono, mas o código é assíncrono.
*/

function retornarValor(numero) { 
    return new Promise(resolve => {
        setTimeout(() => resolve(numero),5000)
    })
} 

// async function executar() {
//     let valor = await retornarValor(100)
//     await esperarPor(1500)
//     console.log(`async/await ${valor}`)
//     await esperarPor(1500)
//     console.log(`async/await ${valor + 1}`)
//     await esperarPor(1500)
//     console.log(`async/await ${valor + 2}`)
//     return valor + 3 
// }
// console.log(executar()); ao return valor + 3 na função executar, não houve o retorno do valor esperado. 

// let v = executar()
// console.log(v); output pending

// executar().then(console.log); // output esperado 103

//exemplo2
async function retornarValorRapido() {
    return 20
}

function executar() {
    return retornarValorRapido();
}
executar().then(console.log);