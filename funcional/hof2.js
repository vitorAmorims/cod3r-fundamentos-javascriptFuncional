//aqui vamos retornar uma função há partir de uma função

//exemplo 1 - criando função básica
function finalPrice(tax, price) {
    return price * (1 + tax)
}
console.log(finalPrice(0.0875, 25.1)) //retornar 27.29625 já com imposto

//---------como fazer uma função retornar outra função--------------------------//

//podemos refatorar a função acima...
function finalPrice1(tax) { //recebe apena um único param
    return function (price) { //nota que aqui estou retornando uma função anônima. 
        return price * (1 + tax)
    }
}
console.log(finalPrice1(0.09))// ao executar a função retornou [Function]
console.log(finalPrice1(0.09)(25.1)) //necessário colocar o preço do produto, retornou o preço 27.25 já com imposto

//--- qual sentido de quebrar em duas funções?
//curring: técnica muito usada na program funcional, permite maior grau de reuso, passar os parametro de modo parcial para funções.
console.log(finalPrice1(0.09)(1500)) 




