/* 
Check - Validação do telefone: somente números, 10 ou 11 dígitos e caracteres especiais.
Validação do CPF: somente números, 11 dígitos, sem espaços ou caracteres especiais.
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

    return {
        validadorTelefone
    };

}

export default cadstroFormService;
