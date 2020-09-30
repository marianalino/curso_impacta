var Escola = {
    nome: 'Impacta',
    endereco: {
        logradouro: 'Avenida Paulista',
        numero: 1009,
        cep: '01311-100'
    },
    cursos: [
        'JavaScript',
        'PHP',
        'SQL Server',
        'Java',
        'Lógica de Programação'
    ],
    mostrarInfos: function() {
        /*
        var texto = 'Nome da escola: ' + this.nome +
            '\nEndereço' +
            '\n    Logradouro: ' + this.endereco.logradouro +
            '\n    Número: ' + this.endereco.numero +
            '\n    CEP: ' + this.endereco.cep;
        */

        var texto = `
            Nome da escola: ${this.nome}
            Endereço
                Logradouro: ${this.endereco.logradouro}
                Número: ${this.endereco.numero}
                CEP: ${this.endereco.cep}`;
        return texto;
    }
};

module.exports = Escola;