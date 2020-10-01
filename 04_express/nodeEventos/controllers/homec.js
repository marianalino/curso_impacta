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
            response.render('home/login');
        },
        logout: function(request, response) {
            response.render('home/logout');
        }
    };

    return HomeController;
};