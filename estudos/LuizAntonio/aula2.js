function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({id, nome: "Ana"});
            }
            else{
                reject("id inválido");
            }
        }, 1000);
    });
}

buscarUsuario(1)
    .then((usuario) => console.log(usuario))
    .catch((erro) => console.log(erro))

    async function mostrarUsuario(id){
        try {
            const usuario = await buscarUsuario(id);
            console.log(usuario);
        } catch (erro) {
            console.log("Não foi possível buscar o usuário:", erro);
        }   
    }

async function carregarPiadas() {
    const resposta = await fetch("https://official-joke-api.appspot.com/random_joke");
    const dados = await resposta.json();
    console.log(dados);
}

carregarPiadas();


//respostas das questões da aula

//1)R: Promise é um objeto que representa a conclusão ou a falha de uma operação assíncrona

//2)R: Os estados possíveis da Promise são: Pending: ainda não sabemos  o resultados, está em andamento
//Fulfilled: deu certo, o valor está disponível
//Rejected: deu errado, temos um motivo de erro 

//3)R:
async function buscarProduto(id){
    try{
        const produto = await buscarProduto(id);
        console.log(produto);
    } catch (erro) {
        console.log("Não foi possível buscar o produto:", erro);
    }
}

//4)R: O wait pauda apenas a função que ele está

//5)R: porque o JavaScript precisa transformar a função inteira em uma estrutura especial para poder pausá-la e 
//retomá-la sem travar o resto do programa

//6)R:
function buscarProduto(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0){
                resolve({id, nome: "Produtomassa"});
            }
            else{
                reject("id inválido");
            }
        }, 1000)
    });
}

async function buscarProduto(id){
    try{
        const produto = await buscarProduto(id);
        console.log(produto);
    } catch (erro) {
        console.log("Não foi possível buscar o produto:", erro);
    }
}

//7)R:


