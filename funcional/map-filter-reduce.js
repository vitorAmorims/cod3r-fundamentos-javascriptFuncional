const students = [
    {name: 'John', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

//pequenas funções
const greatStudent = student => student.score >= 9 //recup array de objetos, com aluno de score >= 9
const getScore = el => el.score // array de scores
const avg = (acc, element, index, array) => {
    if (index === array.length - 1) {
        return (acc + element) / array.length
    } else {
        return acc + element;
    }
}

//output
console.log(students.filter(greatStudent)); //output [ { name: 'Emma', score: 9.4 }, { name: 'Peter', score: 9.1 } ]

console.log(students.map(getScore)); // output [ 6.4, 8.6, 9.4, 9.1 ]

//média geral
console.log('Média geral: ' + students
.map(getScore)
.reduce(avg)); // output média geral 8.375

//média dos bons estudantes
console.log('Média dos melhores estudantes: ' + students
.filter(greatStudent)
.map(getScore)
.reduce(avg));
