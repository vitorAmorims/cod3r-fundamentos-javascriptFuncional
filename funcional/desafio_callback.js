const carrinho = [
    { nome: "Caneta", quantidade: 10, preco: 7.99 },
    { nome: "Impressora", quantidade: 0, preco: 649.50 },
    { nome: "Caderno", quantidade: 4, preco: 27.10 },
    { nome: "Lapis", quantidade: 3, preco: 5.82 },
    { nome: "Tesoura", quantidade: 1, preco: 19.20}
]
// desafio 1 - obter um array com os nomes dos produtos, utilize método map.
const nomesDosProdutos = carrinho.map((produto) => {
    return produto.nome;
});
// console.log(nomesDosProdutos);

// refatorando

const getNomes = produto => produto.nome;
const nomesDosProdutos1 = carrinho.map(getNomes)
console.log(nomesDosProdutos1);

// desafio 2 - obter os valores consolidados de quantidade x preco, utilizando método map.
const valoresConsolidados = carrinho.map(produto => produto.quantidade * produto.preco
);
// console.log(valoresConsolidados);

// refatorando
const getProdutosXPrecos = produto => produto.quantidade * produto.preco;
const valoresConsolidados1 = carrinho.map(getProdutosXPrecos);
console.log(valoresConsolidados1);


Array.prototype.meuMap = function(fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this));
    }
    return result;
}
const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros.meuMap((element) => element * 2));