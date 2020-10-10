const numbers = [1,2,3,4,5,6];

//pequenas funções
const sum = (total, el) => total + el;

const avg = (acc, element, index, array) => {
    if (index === array.length - 1) {
        return (acc + element) / array.length
    } else {
        return acc + element
    }
}


//retorno das funções
const total = numbers.reduce(sum); //se colocar, valor inicial o resultado no console.log será 22

console.log('A soma dos elementos do array numbers é igual: ' + total); //21

const result = numbers.reduce(avg);

console.log('A média dos elementos do array numbers é igual: ' + result); //3.5

