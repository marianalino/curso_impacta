var colecao = require('./colecoes');

// Obtendo um subconjunto da lista de nomes, com base em um critério
var filtroNomes = colecao.nomes.filter(n => n.includes('o'));

// Para cada ITEM do FILTRONOMES
for (const item of filtroNomes) {
    console.log('Nome: ' + item);
    console.log('------------');
}
// Obtendo um subconjunto da lista de cursos, com base em um critério
var filtroCursos = colecao.cursos.filter(curso => (curso.periodo == "Noturno" && curso.ch >= 40));

for (const item of filtroCursos) {
    console.log(item);
    console.log('------------');
}

for (const item of filtroCursos) {
    console.log('Nome: ' + item.nome);
    console.log('Carga horária: ' + item.ch);
    console.log('Período: ' + item.periodo);
    console.log('------------');
}