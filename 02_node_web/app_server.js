var http = require('http');
var fs = require('fs');
var url = require('url');

// função createServer do módulo http recebe uma função de callback que por sua vez tem 2 parametros
var server = http.createServer(function(request, response) {
    // Vamos usar o request para pegar informações da URL
    var url_params = url.parse(request.url);
    // Vamos pegar o nome do caminho do arquivo e salvar na variavel 'caminho'
    var caminho = url_params.pathname;

    // readFile tem 2 parametros:
    //   1 - o arquivo a ser lido
    //   2 - é uma função callback que será executada de acordo com o que faremos com o arquivo - é opcional
    //   No caso de usar a função callback que é opcional, ela precisará ter 2 parametros:
    //      1 - possível erro
    //      2 - conteúdo da página
    //   O fs lê o arquivo e armazena e o parametro da função callback pega o conteúdo e exibe
    // constante do node -> __dirname (retorna aonde está sendo executado o código)
    fs.readFile(__dirname + caminho, function(erro, conteudo) {
        if (erro) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.write('<h1>Ooops! Aconteceu um erro!</h1>');
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(conteudo);
        }
        response.end();
    });

});

server.listen(3000, function() {
    console.log('O meu servidor está no ar!');
});