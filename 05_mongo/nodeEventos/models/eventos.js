module.exports = function(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var evento = Schema({
        descricao: {
            type: String,
            required: true
        },
        data: {
            type: Date
        },
        preco: {
            type: Number
        }
    });

    // eventos é a collection (tabela)
    // evento é o Schema acima criado
    return mongoose.model('eventos', evento);
};
