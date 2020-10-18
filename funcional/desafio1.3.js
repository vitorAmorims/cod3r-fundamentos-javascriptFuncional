// Cria uma função, que receba param base. Retorna uma função com parâmetro expoente, e retorne uma função que calcule base elevado expoente.
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}
// console.log(potencia(2)(3));

// Arrow function
const potencia1 = (base) => {
    return function(exp) {
        return Math.pow(base, exp);
    }
}
// console.log(potencia1(2)(3));

// Arrow function mais curta
const potencia2 = (base) => {
    return (exp) => Math.pow(base, exp);
}
console.log(potencia2(2)(3));

// Arrow function mais curta ainda, nossa....
const potencia3 = (base) => (exp) => Math.pow(base, exp);

console.log(potencia2(2)(3));

