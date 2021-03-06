// O módulo abaixo exporta uma função que tem um objeto (HomeController)
// Esse objeto é retornado na função (return HomeController) para que possa ser devidamente exportado / importado em uma página
// Esse objeto (HomeController) ele pode ter várias e quantas propriedades você quiser
// É importante que cada propriedade tenha os 2 parametros de request e response para entrada e saída de informações

// Essa funções (propriedades) também são conhecidas como ACTIONS - a index é uma ACTION
// Essa action chamaremos no nosso arquivo home de rota e que também será um módulo/função que será exportada
module.exports = function(app) {
    var HomeController = {
        index: function(request, response) {
            response.render('home/inicio');
        },
        login: function(request, response) {
            // obter as informações dos campos de entrada
            // request para utilizar o bodyParser para pegar as infos do formulário
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            // simulação de login
            if (nome == 'admin' && senha == 'admin') {
                // vamos armazenar as infos do usuario
                var user = request.body.usuario;

                // criar a sessão e armazenar as informações do usuário
                request.session.usuarioSession = user;
                response.redirect('/menu');
            } else {
                response.redirect('/');
            }
        },
        logout: function(request, response) {
            request.session.destroy();
            response.redirect('/');
        }
    };

    return HomeController;
};