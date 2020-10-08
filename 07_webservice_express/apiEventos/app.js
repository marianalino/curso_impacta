var express = require('express');
var load = require("express-load");
var bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/eventos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

load('models').into(app);

var Evento = app.models.eventos;

// apenas alerta para o usuario
app.get('/', function(request, response) {
  response.send("Webservice no ar!");
});

// listar todos os eventos
app.get('/eventos', function(request, response) {

});

// pegar somente 1 evento
app.get('/eventos/:id', function(request, response) {

});

// criar novo evento
app.post('/eventos', function(request, response) {

});

// atualizar um evento
app.put('/eventos/:id', function(request, response) {

});

// deletar um evento
app.delete('/eventos/:id', function(request, response) {

});

app.listen(3200, function() {
  console.log('API funcionando!');
});