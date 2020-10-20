const carrinho = [
    { nome: "Caneta", quantidade: 10, preco: 7.99, fragil: true },
    { nome: "Impressora", quantidade: 1, preco: 649.50, fragil: true },
    { nome: "Caderno", quantidade: 4, preco: 27.10, fragil: false },
    { nome: "Lapis", quantidade: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", quantidade: 1, preco: 19.20, fragil: true}
]

// 1. apenas os elementos que fragil = true, utilize o método filter.
const produtosFrageis = (carrinho.filter((produto) => produto.fragil = true));
console.log(produtosFrageis);

// 2. quantidade x preco -> total de cada elemento, utilize o método map.
const getTotal = produto => produto.quantidade * produto.preco;
// console.log(produtosFrageis.map(getTotal));

const getMedia = (acc, element) => {
    const novaQtde = acc.quantidade + 1;
    const novoTotal = acc + element;
    return {
        quantidade: novaQtde,
        total: novoTotal,
        media: novoTotal/novaQtde
    }
}
const mediaInicial = { quantidade: 0, total: 0, media: 0};

// 3. gere a media dos totais, dentro da função, utilize o método reduce.
console.log(carrinho
    .filter(produto => produto.fragil = true)
    .map(produto => produto.quantidade * produto.preco)
    .reduce((acc,element) => acc + element)/carrinho.length);



