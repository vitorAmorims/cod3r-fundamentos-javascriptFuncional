// calcular(3)(7)(fn)
// fn -> 3 * 7 expected 21
// fn -> 3 + 7 expected 10
// fn -> 3 - 7 expected -4
// function fn(a,b) {
//     console.log(a * b);
//     console.log(a + b);
//     console.log(a - b);
// }

// function calcular(n1,n2) {
//     return fn(n1,n2)
// }
// calcular(10,9);

function adicao(a,b) {
    return a + b;
}

function subtracao(a,b) {
    return a - b;
}

function multiplicacao(a,b) {
    return a * b;
}

function calcular(n1) {
    return function(n2) {
        return function(fn) {
            return fn(n1, n2);
        }
    }
}
console.log(calcular(10)(5)(adicao));
console.log(calcular(5)(15)(subtracao));
console.log(calcular(10)(10)(multiplicacao));

//podemos atribuir o resultado da chamada da função para uma variável
//exemplo
const n1 = calcular(10)(5)(adicao)
console.log(n1);

//Crie uma função que receba duas funções de parâmetro adicao e multiplicacao. E tenha output esperado para cada função de parâmetro.
function exemplo(adicao, multiplicacao) {
    let n1 = 2;
    let n2 = 5;
    console.log(adicao(n1,n2));
    console.log(multiplicacao(n1,n2));
}
exemplo(adicao, multiplicacao);

//adicao n1 = 2, n2 = 5 -> output 7
//multiplicacao n1 = 2, n2 = 5 -> output 10 