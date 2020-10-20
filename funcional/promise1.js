// promise vantagens compor melhor várias chamadas

// promise é uma promessa, que vai se resolver no futuro.

let p = new Promise(function(cumprirPromessa) { //Promise possui function como param, e está function possui outra fuction de param.
// Nota: cumprirPromessa é uma função que vai retornar, o que me interessa.
    cumprirPromessa(3)
});

console.log(typeof Promise); //output function

console.log(typeof p) //output object

// para acessar valor de p

// quando a promise estiver cumprida, posso acessar o valor

p.then(function(valor) { // método .then, precisa de uma function com valor de parâmetro. 
    console.log(valor);
})


