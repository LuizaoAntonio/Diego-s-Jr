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