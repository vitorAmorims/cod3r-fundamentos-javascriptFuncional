// promise vantagens compor melhor várias chamadas "aninhamentos"
// promise é uma promessa, que vai se resolver no futuro.

// promise gera um único valor

let p = new Promise(function(cumprirPromessa) { //Promise possui function como param, e está function possui outra fuction de param.
// Nota: cumprirPromessa é uma função que vai retornar, o que me interessa.
    cumprirPromessa(["Lucas","Vitor","Neusa","Rubens","Silvia"]) //array
});

console.log(typeof Promise); //output function

console.log(typeof p) //output object

// para acessar valor de p

// quando a promise estiver cumprida, posso acessar o valor

// p.then(function(valor) {  método .then, precisa de uma function com valor de parâmetro. 
//     console.log(valor); output array completo. 
// })

//Arrow function
// p.then(valor => console.log(valor));

//vantagens .then que você chamar ele quantas vezes quiser, compondo funções uma atrás da outra

const todosElementos = array => array;

const primeiroElemento = array => array[0];

const primeiraLetra = string => string[0];

const transformarParaMinuscula = letra => letra.toLowerCase();

p
.then(primeiroElemento)
.then(primeiraLetra)
.then(transformarParaMinuscula)
.then(console.log); //posso user apenas console.log

