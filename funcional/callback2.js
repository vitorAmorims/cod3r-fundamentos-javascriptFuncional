//callback para ler um arquivo
//quando o arquivo for lido,  uma função será chamada
//ou seja, quando acontecer um evento.
//evento será leitura do arquivo.

/* quando evento demorar um pouco, significa processo assincrono
quando o processo de leitura do arquivo e feito, finalizado a leitura do arquivo, ele vai chamar a função de volta, para passar o conteúdo do arquivo.
*/

//existem duas formas de ler um arquivo, com callback e sem callback "sincrona"

// exemplo com callback
// 1 - etapa, importar bibliotecas 
const fs = require('fs');  //library para leitura do arquivo
const path = require('path'); //library para pegar o caminho do arquivo

// 2 - etapa, criar arquivo, neste caso dados.txt com seu respectivo conteúdo

// 3 - etapa, usar path.join(__dirname,'nomeDoArquivo')
const caminho = path.join(__dirname,'dados.txt') 
//a constante __dirname vai pegar o dir atual que está rodando.

// console.log(__dirname)

//dados.txt está concatenando com a constante __dirname

// 4 - etapa, usando file system 'fs' para ler arquivo
// 4.1 - opção fs.readFile() que vai precisar de uma callback, note a necessidade dos parâmetros da função.
console.log("Início de leitura, modo assincrono!");
fs.readFile(caminho, {}, function exibirConteudo(error, conteudo) {
    console.log(conteudo.toString()) //necessidade toString() para leitura correta do arquivo.
});
console.log("Final de leitura, modo assincrono!");
/* nota: na função callback, podemos usar _ no lugar de error. Este recurso é utilizado quando não utilizamos o parâmetro na função.

Ao executar os consoles.log, mais a função fs, observa-se...
1 - apareceu primeiro console.log.
2 - apareceu segundo console.log.
3 - depois apareceu a leitura do arquivo.
*/


// 4.2 lendo o arquivo de forma sincrona
console.log("início de leitura, modo sincrono");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("final de leitura, modo sincrono");

//Nota: Para visualizar claramente assincronismo e sincronismo, deste exemplo, recomendo comentar a parte 4.1 e rodar 4.2, depois comente a parte 4.2 e rode 4.1.

//depois rode completo, para vizualizar a ordem de execução no geral.


