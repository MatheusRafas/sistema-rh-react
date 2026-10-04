function viaCepService(cep) {
    
    const cepLimpo = cep.replace(/\D/g, ''); //Remove tudo que não for valor

    if(cepLimpo.length !== 8) {
        throw new Error('CEP deve ter 8 dígitos');
    }

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
    
    return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(('Erro ao buscar CEP'));
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error(('CEP não encontrado'));
            }
            return data;
        });
}

export default viaCepService;