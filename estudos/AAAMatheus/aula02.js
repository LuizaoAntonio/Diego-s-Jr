//atv1
//promise é um objeto que indica a rejeição ou aceitação de uma requisição

//atv2
//pending, fullfilled e rejected

//atv3
async function obterProduto() {
  try { const produto = await buscarProduto(3);
    console.log(produto);}
    catch(erro){ console.log(erro); } }
obterProduto();

//atv4
//apenas a função

//atv5
//pq o async serve como um marcador, que diz pro JS que vai ter uma promise, sem ele, o programa não consegue saber isso

//atv6
async function buscarProduto(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, nome: "Produto " + id }; }
buscarProduto(1).then((produto) => { console.log(produto); } );

//atv7
//a função utiliza o await sem declarar como async

//atv8
async function carregar() {
const resposta = await fetch("https://exemplo.com/api");
const dados = resposta;
console.log(dados);
}

//atv9
//O fetch só lança um erro quando não consegue se comunicar com o servidor, considerando um status 404 como sucesso porque o servidor conseguiu enviar uma resposta HTTP válida.

//atv10
//O método map não sabe esperar por operações assíncronas, apenas criando imediatamente uma lista de Promises pendentes enquanto o restante do código continua rodando sem aguardar as respostas.
