const input = require ('readline-sync');

// ex01 a 03
const num = [1, 2, 3, 4]; 

const dobro = num.map((p) => p * 2);

console.log(num, "\n");
console.log(dobro, "\n");

const pares = num.filter((p) => p % 2 === 0);

console.log(pares, "\n");

// o map é usado para percorrer um array e criar um novo transformando cada elemento, já o filter serve para selecionar elemntos de um array que atendem a uma determinada condição


// ex04
const p = {titulo: "Caneca", preco: 25};
const {titulo, preco} = p;

// ex05
const valor = Number(input.question());

const ehCaro = (valor) => {
    if(valor > 100){
        return true;
    }
    
    return false;
}

console.log(ehCaro(valor), "\n");

// ex06 e ex07

const cores = ["azul", "verde"];
const cores2 = [...cores, "vermelho"];

console.log(cores2, "\n");

const pp = {...p, emPromocao: 20};

console.log(pp, "\n");

// ex8

const produtos = [
    { nome: "Caneca", estoque: 3 },
    { nome: "Camiseta", estoque: 0 },
    { nome: "Adesivo", estoque: 7 }
];

const np = produtos.map((p) => p.nome);

console.log(np, "\n");

// ex09: O que está errado com esse código: const total = precos.map((p) => { p * 2 });
// R: As chaves, precisaria de um "return:" para ter as chaves

// ex10: Qual a diferença entre import Botao from "./Botao.js" e import { Botao } from "./Botao.js"?
// R: import Botao from "./Botao.js" usa export default. import { Botao } from "./Botao.js" usa export nomeado.

// ex11: Explique por que lista.push(novo) é um problema dentro de um componente React.
// R: Porque o React trabalha melhor com imutabilidade. O push() altera diretamente o array original, e isso pode fazer o React não perceber a mudança corretamente.

// ex12

const maior = produtos.filter((p) => p.estoque > 5);

console.log(maior);

