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
  Evento.find(function(erro, eventos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(eventos);
    }
  });
});

// pegar somente 1 evento
app.get('/eventos/:id', function(request, response) {
  var id = request.params.id;

  Evento.findById(id, function(erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(evento);
    }
  });
});

// criar novo evento
app.post('/eventos', function(request, response) {
  var evento = {
    'descricao': request.body.descricao,
    'data': request.body.data,
    'preco': request.body.preco
  };

  Evento.create(evento, function(erro, item) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(item);
    }
  });
});

// atualizar um evento
app.put('/eventos/:id', function(request, response) {
  var id = request.params.id;

  // aqui encontramos o evento que queremos
  Evento.findById(id, function(erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      // aqui procedemos com a atualizaçao
      evento.descricao = request.body.descricao;
      evento.data = request.body.data;
      evento.preco = request.body.preco;

      evento.save(function(erro, eventoAtualizado) {
        if (erro) {
          response.json(erro);
        } else {
          response.json(eventoAtualizado);
        }
      });
    }
  });
});

// deletar um evento
app.delete('/eventos/:id', function(request, response) {
  var id = request.params.id;

  Evento.findById(id, function(erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      Evento.remove(evento, function(erro, eventoApagado) {
        var descricao = evento.descricao;

        if (erro) {
          response.json(erro);
        } else {
          response.send("Evento " + descricao + " removido");
        }
      });
    }
  });
});

app.listen(3200, function() {
  console.log('API funcionando!');
});