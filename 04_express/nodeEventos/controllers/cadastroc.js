module.exports = function(app) {

    var CadastroController = {
        novoUsuario: function(request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirmar = request.body.usuario.confirmar;

            // codigo a ser implementado
        },
        novoEvento: function(request, response) {
            var evento = request.body.evento;

            // codigo a ser implementado
        }
    };

    return CadastroController;
}