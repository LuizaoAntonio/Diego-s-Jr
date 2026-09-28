1- const dobro = nums.map(n => n * 2);
2-const pares = nums.filter(n => n % 2 === 0);
3-O map transforma cada item de uma lista gerando uma nova lista do mesmo tamanho, enquanto o filter seleciona apenas alguns itens da lista original com base em uma condição
4-const { titulo, preco } = p;
5-const ehCaro = preco => preco > 100;
6-const cores2 = [...cores, "vermelho"];
7-const pEmPromocao = { ...p, preco: 20 };
8-const emEstoque = produtos.filter(p => p.estoque > 0).map(p => p.nome);
9-Falta a palavra-chave return dentro das chaves, ou você deve remover as chaves para o retorno ser automático
Correção: const total = precos.map((p) => p * 2);
10-O import Botao traz o componente que foi exportado como padrão (export default), enquanto o import { Botao } traz um componente exportado com um nome específico (export const Botao)
11-Porque ele modifica a lista original diretamente (quebra o princípio da imutabilidade), fazendo com que o React não perceba a mudança e não atualize a tela do usuário
12-const maisDeCinco = produtos.filter(p => p.estoque > 5).map(p => p.nome);
