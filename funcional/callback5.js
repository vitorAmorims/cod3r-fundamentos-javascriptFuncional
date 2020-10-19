const carrinho = [
    { nome: "Caneta", quantidade: 10, preco: 7.99 },
    { nome: "Impressora", quantidade: 0, preco: 649.50 },
    { nome: "Caderno", quantidade: 4, preco: 27.10 },
    { nome: "Lapis", quantidade: 3, preco: 5.82 },
    { nome: "Tesoura", quantidade: 1, preco: 19.20}
]

//utilizando método reduce, obtenha o valor total do carrinho.
//valor total, e a multiplicacao de quantidade x preco de cada produto
const getPrices = product => product.quantidade * product.preco

console.log(carrinho.map(getPrices)) //aqui temos um array com o total por produto.

const totalPorProduto = (carrinho.map(getPrices));

const total = totalPorProduto.reduce((acc, element) => acc + element);
console.log(total);

// refatorando
const getSum = (acc, element) => acc + element;
const total1 = totalPorProduto.reduce(getSum);
console.log(total1);

//refatorando
const totalGeral = carrinho
.map(getPrices)
.reduce(getSum, 0);
console.log(totalGeral);