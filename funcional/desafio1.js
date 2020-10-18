/*Este desafio tem objetivo de exercitar, a lógica de uso para funções que  retornam outras funções*/

//Crie a função somar, que receba um numero de parâmetro. Chame a função com outros numeros como exemplo: somar(3)(4)(5) //output 12

function somar(a = 0) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
        
    }
}
const somarAB = somar(3)(4);
console.log(somarAB(5));
console.log(somar(10)(20)(30))

// 1 - etapa criei a função somar, com outra função de retorno
// console.log(somar(3)); output [Function]
//aqui tinhamos uma function somar com parâmetro number, e retorno function anônima com parâmetro n. 
// console.log(somar(3)(4)) //output 7

// 2 - etapa chamei a função somar, passando os parâmetros console.log(somar(3)(4)(5)) 
// console.log(somar(3)(4)(5)) //output typeError: somar (...)(...) is not a function

// 3 - etapa, para resolver o problema, precisei aninhar outra function anônima com parâmetro x
// console.log(somar(3)(4)(5)) //output 12
