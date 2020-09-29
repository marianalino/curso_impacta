// Nesse arquivo escreveremos funções e objetos a serem exportados

function calcularSoma(x, y) {
    return x + y;
}

// Primeira exportação
exports.somar = calcularSoma;

exports.multiplicar = function(x, y) {
    return x * y;
};

// Nome dos participantes do curso
exports.alunos = [
    {
        nome: 'Natália Gomes',
        ocupacao: 'DBA'
    },
    {
        nome: 'Arthur Andrew',
        ocupacao: 'vida que sinto inveja'
    },
    {
        nome: 'Jonathan Trombim',
        ocupacao: 'Suporte TI'
    },
    {
        nome: 'Ronaldo Moreira',
        ocupacao: 'Gestor de TI'
    },
    {
        nome: 'Mariana Lino',
        ocupacao: 'Instrutora'
    }
];
