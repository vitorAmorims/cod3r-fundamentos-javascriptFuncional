//hof higher-order-function

//quando uma função, opera outras funções

//posso passar uma função como argumento para outra função ou posso retornar uma função há partir de 
//outra função.
//-------------------------------------------------//
//exemplo de hof
function run(fn) {
     return fn();
}

function sayHello() {
    console.log("Hello world");
}
run(sayHello); //output Hello World ok

//-------------------------------------------------//
//exemplo 2
function run2(fn) {
    console.log(fn());
}

function teste() {
    return 3
}
run2(teste); //output 3 ok

//--------------------------------------------------//

//exemplo 3 com função anonima
run(() => {
    console.log("Estou usando função anônima!")
});

//---------------------------------------------------//

//Aqui estou usando função nativa do js
const result = run(Math.random)
console.log(result)

