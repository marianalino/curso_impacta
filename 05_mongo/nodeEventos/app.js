// Importação do módulo de express
var express = require('express');

// Instância do express para uso no projeto para configuração e execução do express
app = express();

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/eventos_aula');

mongoose.connection.on('connected', function() {
  console.log('*** Conexão estabelecida ***');
});

mongoose.connection.on('error', function() {
  console.log('*** Erro: ' + error + " ***");
});

mongoose.connection.on('disconnected', function() {
  console.log('*** Conexão finalizada ***');
});

// Importação de módulo para ligar pastas MVC
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

// Existe uma constante no express chama 'views' - isso não inventamos - e esse comando significa que as nossas views não podem ficar em qualquer lugar, tem que ficar em um lugar específico. Então usamos o DIRNAME para identificar a pasta do projeto e referimos a pasta views que existe na estrutura interna da pasta nodeEventos
app.set('views', __dirname + '/views');
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

// A constante 'view engine' também não inventamos, utilizamos ela para setar/configurar qual será o tipo de arquivo para visualização
app.set('view engine', 'ejs');

// Utilizamos o app.use para configurar qual será o caminho de pasta de arquivos estáticos utilizados pelo express para carregamento de imagens, css, e até javascript
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// A ordem de carregamento dos itens do MVC é importante devido a termos a necessidade de os models e controllers estarem 'previamente' carregados para que quando a aplicação faça um request, a rota interprete, chame o controller (função) e os models (caso seja necessário) seja carregado
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

// Assim como no exemplo do projeto node, utilizamos aqui no projeto Express Node o .listen() para rodar o servidor e possibilitar a aplicação de rodar
// O Express encapsula o módulo de http
app.listen(3001, function() {
  console.log("Aplicação rodando");
});