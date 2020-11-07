class Produto {
    constructor (nome, preco, desconto = 0.15){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    get PrecoFinal () {
       return this.preco * (1- this.desconto)
    }
}

const p1 = new Produto('Caneta',10);
console.log(p1.PrecoFinal);

const p2 = new Produto('Geladeira', 5000, 0.3);
console.log(p2.PrecoFinal);