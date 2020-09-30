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

exports.executar = function(operacao) {
    return operacao('Impacta');
};

exports.verificarTamanho = function(x) {
    return x.length;
};

exports.verificarTamanho2 = x => x.length;
exports.verificarTamanho3 = (x) => x.length;

exports.multiplicarNormal = function(x, y) {
    return x * y;
};

exports.multiplicarAF = (x, y) => x * y;

exports.fn = function() {
    console.log('Teste Arrow Function sem parametro');
};

exports.fn = () => console.log('Teste Arrow Function sem parametro');

exports.fn2 = function(texto) {
    let novoTexto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
};

exports.fn2 = (texto) => {
    let novoTexto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
};