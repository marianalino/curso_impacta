module.exports = function(app) {
    var valida = require('./../middlewares/valida');

    // Vamos criar uma variável para referenciar o nosso controller (homec.js)
    var homec = app.controllers.homec;

    // Pegaremos o objeto app e como queremos fazer uma requisição no browser, usaremos o GET
    // Inicialmente usaremos '/'
    app.get('/', homec.index);
    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    var eventosc = app.controllers.eventosc;
    app.get('/menu', valida, eventosc.menu);
    app.get('/cadUsuario', valida, eventosc.cadastroUsuario);
    app.get('/cadEvento', valida, eventosc.cadastroEvento);
    app.get('/listaEventos', valida, eventosc.listaEventos);

    var cadastroc = app.controllers.cadastroc;
    app.post('/novoUsuario', cadastroc.novoUsuario);
    app.post('/novoEvento', cadastroc.novoEvento);
}