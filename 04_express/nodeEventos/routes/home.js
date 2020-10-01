module.exports = function(app) {
    // Vamos criar uma variável para referenciar o nosso controller (homec.js)
    var homec = app.controllers.homec;

    // Pegaremos o objeto app e como queremos fazer uma requisição no browser, usaremos o GET
    // Inicialmente usaremos '/'
    app.get('/', homec.index);

    app.post('/login', homec.login);

    app.post('/logout', homec.logout);
}