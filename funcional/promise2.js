// iniciando com fn callback aninhadas.
// setTimeout(() => {
//     console.log("Primeiro console.log");
//     setTimeout(() => {
//         console.log("Segundo console.log");
//         setTimeout(() => {
//             console.log("Terceiro console.log");
//         },2000)
//     },2000)
// }, 2000);

// como fazer estes output's com Promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve()
            console.log("Executando promise...")
        },tempo)
    })
}
esperarPor()
.then(() => esperarPor())
.then(() => esperarPor());
