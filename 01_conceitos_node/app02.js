var funcoes = require('./funcoes');

let n1 = 10;
let n2 = 20;

var soma = funcoes.somar(n1, n2);

console.log('------------');
console.log("Minha soma deu: " + soma);

var multiplica = funcoes.multiplicar(n1, n2);

console.log('------------');
console.log("Minha multiplicação deu: " + multiplica);

console.log('------------');
var lista = funcoes.alunos;

console.log("Quantidade alunos: " + lista.length);
console.log('------------');
for (let index = 0; index < lista.length; index++) {
    console.log("Posição: " + index);
    console.log(lista[index]);
}

for (let index = 0; index < lista.length; index++) {
    console.log('------------');
    console.log('Nome: ' + lista[index].nome);
    console.log('Ocupação: ' + lista[index].ocupacao);
}

console.log('------------');
console.log('Usando a função para verificar tamanho de uma string');
console.log('Caracteres: ' + funcoes.verificarTamanho('Impacta'));

console.log('------------');
console.log('Usando a função para verificar tamanho de um number/inteiro');
console.log('Número: ' + funcoes.verificarTamanho(10));

const numeros = [1, 2, 3, "4", "5"];
console.log('------------');
console.log('Usando a função para verificar tamanho de um lista/array');
console.log('Lista: ' + funcoes.verificarTamanho(numeros));

console.log('------------');
let resposta = funcoes.executar(function(texto) {
    return texto.length;
});
console.log(resposta);