/* 
Check - Validação do telefone: somente números, 10 ou 11 dígitos e caracteres especiais.
Check - Validação do CPF: somente números, 11 dígitos, sem espaços ou caracteres especiais.
Validação do RG: somente números, 9 dígitos, sem espaços ou caracteres especiais.
Validação da Nacionalidade: somente letras, sem espaços ou caracteres especiais.
Validação da Naturalidade: somente letras, sem espaços ou caracteres especiais.
*/

function cadstroFormService() {
    function validadorTelefone(telefone) {
        if (typeof telefone !== 'string') {
            throw new Error('Telefone é obrigatório');
        } else if (!/^\d+$/.test(telefone)) {
            throw new Error('Telefone deve conter apenas números');
        }


        if(telefone.length !== 10 && telefone.length !== 11) {
            throw new Error('Telefone deve ter 10 ou 11 dígitos, com o DDD da sua região');
        }
    }

    function validadorCPF(cpf) {
        if (typeof cpf !== 'string' || cpf.length === 0) {
            throw new Error('CPF é obrigatório');
        }

        if (!/^\d+$/.test(cpf)) {
            throw new Error('CPF deve conter apenas números');
        }

        if (cpf.length !== 11) {
            throw new Error('CPF deve ter 11 dígitos');
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            throw new Error('CPF inválido');
        }
    }

    return {
        validadorTelefone,
        validadorCPF
    };

}

export default cadstroFormService;
