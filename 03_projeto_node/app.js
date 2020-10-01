var moment = require('moment');

moment.locale('pt-BR'); // formatação da lingua a ser usada para tratar a data
const now = moment();
// console.log(now); // modelo não formatado
console.log(now.format("dd")); // sigla do dia da semana com 2 caracteres
console.log(now.format("ddd")); // sigla do dia da semana com 3 caracteres
console.log(now.format("dddd")); // dia da semana escrito de forma inteira
console.log(now.format("DD/MM/yyyy")); // formatado dia/mês/ano