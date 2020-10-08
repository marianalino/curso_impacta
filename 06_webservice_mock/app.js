var fetch = require('node-fetch');

var url = "http://localhost:3000/produtos"; // Nossos produtos

var produtos = {};

// fetch faz uma requisição da URL e ao receber vamos processar as informações vindas
fetch(url)
    .then(resposta => { // pega esse retorno, que pode ou não ser lento e para isso realizamos uma execução em cadeia - com outro then abaixo
        var x = resposta.json();
        // console.log(x);
        return x;
    }).then(saida => {
        produtos = saida;
        console.log(produtos);
    });

console.log("Fim da requisição");