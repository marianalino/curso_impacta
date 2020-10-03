module.exports = function(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var usuario = Schema({
        nome: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        senha: {
            type: String,
            required: true
        }
    });

    // usuarios é a collection (tabela)
    // usuario é o Schema acima criado
    return mongoose.model('usuarios', usuario);
}