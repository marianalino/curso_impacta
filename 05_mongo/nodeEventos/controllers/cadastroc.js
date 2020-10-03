module.exports = function(app) {

    var Usuario = app.models.usuarios;
    var Evento = app.models.eventos;

    var CadastroController = {
        novoUsuario: function(request, response) {
            var nomeF = request.body.usuario.nome;
            var senhaF = request.body.usuario.senha;
            var confirmar = request.body.usuario.confirmar;

            if ((senhaF != confirmar) || nomeF.trim().length == 0) {
                response.redirect('/cadUsuario');
            } else {
                var usuario = {
                    nome: nomeF,
                    senha: senhaF
                };

                Usuario.create(usuario, function(erro, item) {
                    if (erro) {
                        console.log("Erro: " + erro);
                        response.redirect('/cadUsuario');
                    } else {
                        console.log("Usuário adicionado: " + item);
                        response.redirect('/menu');
                    }
                });
            }
        },
        novoEvento: function(request, response) {
            var evento = request.body.evento;

            if (evento.descricao.trim().length == 0) {
                response.redirect('/cadEvento');
            } else {
                Evento.create(evento, function(error, item) {
                    if (error) {
                        console.log("Erro: " + error);
                        response.redirect('/cadEvento');
                    } else {
                        console.log("Evento adicionado: " + item);
                        response.redirect('/menu');
                    }
                });
            }
        }
    };

    return CadastroController;
}