module.exports = function(app) {
    var EventosController = {
        menu: function(request, response) {
            var usuario = request.session.usuarioSession;
            var params = { usuarioParams: usuario };

            // eventos é a pasta
            // menu é o arquivo .ejs
            response.render('eventos/menu', params);
        },
        cadastroUsuario: function(request, response) {
            var usuario = request.session.usuarioSession;
            var params = { usuarioParams: usuario };

            // eventos é a pasta
            // cadUsuario é o arquivo .ejs
            response.render('eventos/cadUsuario', params);
        },
        cadastroEvento: function(request, response) {
            var usuario = request.session.usuarioSession;
            var params = { usuarioParams: usuario };

            // eventos é a pasta
            // cadEvento é o arquivo .ejs
            response.render('eventos/cadEvento', params);
        },
        listaEventos: function(request, response) {
            var usuario = request.session.usuarioSession;
            var params = { usuarioParams: usuario };

            // eventos é a pasta
            // listaEventos é o arquivo .ejs
            response.render('eventos/listaEventos', params);
        }
    };

    return EventosController;
}