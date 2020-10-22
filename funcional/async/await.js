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

async function executar() {
    await esperarPor(1500) // com await, o output somente será impresso quando houver o retorno da promise
    console.log("async/await 1...")
    await esperarPor(1500)
    console.log("async/await 2...")
    await esperarPor(1500)
    console.log("async/await 3...")
}
executar(); 