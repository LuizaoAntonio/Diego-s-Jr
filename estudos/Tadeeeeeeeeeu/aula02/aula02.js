1-Uma Promise é um objeto que representa o sucesso ou a falha futura de uma operação assíncrona que ainda não foi concluída
2-Pending (Pendente): Estado inicial, quando a operação ainda está executando;
Fulfilled (Realizada/Resolvida): Quando a operação foi concluída com sucesso;
Rejected (Rejeitada): Quando a operação falhou ou deu algum erro;

3-try {
  const produto = await buscarProduto(3);
  console.log(produto);
} catch (erro) {
  console.log(erro);
}

4-O await pausa apenas a execução da função assíncrona onde ele está, permitindo que o resto do programa continue rodando normalmente em segundo plano
5-Porque o motor do JavaScript precisa saber com antecedência que aquela função será pausada e retomada depois, e a palavra-chave async é o marcador obrigatório que sinaliza esse comportamento

6-async function buscarProduto(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, nome: "Produto " + id }), 1000);
  });
}

7-Falta a palavra-chave async antes da declaração da função (async function carregarDados()), já que ela utiliza await em seu corpo

8-const dados = await resposta.json();

9-O fetch só falha se houver erro de rede (sem internet). Se o servidor responder (mesmo com erro 404), a comunicação funcionou, por isso ele não lança um erro automaticamente
10-O .map() roda tudo ao mesmo tempo e não espera o await. O resultado será apenas uma lista de Promises pendentes (ex: [Promise, Promise])
