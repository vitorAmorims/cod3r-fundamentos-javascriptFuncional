//funções

//podemos passar mais param que função exige ou menos param que a função declara.

//sempre que passar param à menos, os param que não foram declarados retornam undefined dentro da função.

//conceitos

//first-class-function quando uma função pode ser atribuida à uma variavel

//exemplo
const add = function(a,b) {
    return a + b;
}
console.log(add(2,10));

const sub = function(a,b) {
    return a - b;
}
console.log(sub(2,10));

const div = (a,b) => a / b;
console.log(div(2,10));

const mult = (a,b) => a * b;
console.log(mult(2,10));
