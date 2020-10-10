const numbers = [1,2,3,4,5];

const numbersV2 = numbers.map((el) => el * 2)
// console.log(numbersV2);

const students = [
    {name: 'John', score: 7},
    {name: 'Lucas', score: 9},
    {name: "vitor", score: 6}
];
// console.log(students);

// console.log(students.map(el => el.score)); // retornou array com as notas dos alunos
const allNotes = students
.map(el => el.score)
.filter(el => el > 8) //aqui estou filtrando os elementos maiores que 8
.map(el => el.toString()); //passei o numero 9 como string
console.log(allNotes)

const getNames = names => names.name
// console.log(students.map(getNames)) // retornou array com os nomes dos alunos
const allNames = students
.map(getNames)
.map(el => el + ', bom dia!') //aqui estou concatendo os nomes, com saudação de bom dia
.map(el => el.toLocaleUpperCase()); //inserindo método toLocalUppercase 
console.log(allNames);

