// atv1
const nums = [1, 2, 3, 4]; const numsa = nums.map(nums => nums * 2); console.log(numsa);

//atv2
const numsb = nums.filter(nums => nums % 2 === 0); console.log(numsb);

//atv3
//Map cria um novo array com a condição colocada, Filter cria um novo array que tira os objetos que nao condizem com a condição//

//atv4
const p = {titulo: "Caneca", preco: 25}; nome = p.titulo; preco = p.preco; console.log(nome, preco);

//atv5
const ehCaro = num => num > 100? "verdadeiro" : "falso";

//atv6
const cores = ["azul", "verde"] const cores2 = [...cores, "vermelho"];

//atv7
const pEmPromocao = {...p, preco: 20};

//atv8
const emEstoque = produtos.filter(p => p.estoque > 0).map(p => p.nome);

//atv9
//falta o return para que o código devolva algo para o usuário

//atv10
//sem chaves importa o elemento como padrão, o segundo importa um elemento específico nomeado

//atv11
//push modifica o array, react não consegue ver essa mudança e não faz a renderização

//atv12
const maisDeCinco = produtos.filter(p => p.estoque > 5).map(p => p.nome);