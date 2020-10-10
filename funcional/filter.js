const numbers = [1,2,3,4,5,6];

//exemplo
// console.log(numbers.filter((el) => el > 0)); //output array completo

//----pequenas funções
const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const greaterPair = el => el % 2 === 0;


//retorno das funções 

const arrayFull = numbers.filter(greaterThanZero); //output array completo

const greaterTen = numbers.filter(greaterThanTen); //output array vazio

const greaterPairNumbers = numbers.filter(greaterPair); //output array 2,4,6


const students = [
    {name: "Lucas", score: 9},
    {name: "silvia", score: 8},
    {name: "Vitor", score: 7}
]

//pequenas funções

const greaterStudant = student => student.score >= 9;
const searchStudent = student => student.name[0] === "V";

//retorno das funções

console.log(students.filter(greaterStudant)) //output [ { name: 'Lucas', score: 9 } ]
console.log(students.filter(searchStudent)) //output  [ { name: 'Vitor', score: 7 } ]