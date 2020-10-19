
const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99},
    { nome: 'Impressora', quantidade: 0, preco: 649.50},
    { nome: 'Caderno', quantidade: 4, preco: 27.10},
    { nome: 'Lapis', quantidade: 3, preco: 5.82},
    { nome: 'Tesoura', quantidade: 1, preco: 19.20}
];

//utilize o método filter para filter os produtos com quantidade maior que 0.
const produtosQuantidadeMaiorQ0 = carrinho.filter((produto) => produto.quantidade > 0);
// console.log(produtosQuantidadeMaiorQ0);

// refatorando
const filtrarProdutosEmEstoque = produto => produto.quantidade > 1;
const carrinhoValido = carrinho.filter(filtrarProdutosEmEstoque)
// console.log(carrinhoValido);

//utilizando filter e map, obtenha o nome dos produtos
const getNomes = produto => produto.nome;
const nomesDosProdutosFiltrados = carrinho
.filter(filtrarProdutosEmEstoque)
.map(getNomes);
console.log(nomesDosProdutosFiltrados);

//Desafio: Criar o método meuFilter
Array.prototype.meuFilter = function(fn) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) { //ao iterar elemento do array, se o resposta de retorno da função for verdadeiro, irá incrementar o novoArray.
            novoArray.push(this[i]);
        }
    }
    return novoArray;
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
numerosMaiorQue5 = numeros => numeros > 5;
const newNumbers = numeros.meuFilter(numerosMaiorQue5);
console.log(newNumbers);



