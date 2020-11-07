function Produto(nome, preco, desconto = 0.50){
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;

    this.PrecoFinal = () => {
        return this.preco * (1- this.desconto);
    }

}
const p1 = new Produto('caneta', 10);
// console.log(typeof p1); object
console.log(p1.nome);

const p2 = new Produto('Notebook', 4000);
// console.log(typeof p2); object
console.log(p2.preco);
console.log(p2.PrecoFinal());

