import "../style/cadastroForm.css";
import { useState } from "react";
import CepInput from './cepInput';
import cadstroFormService from '../services/cadastroFromService';

const service = cadstroFormService();

function CadastroForm() {
    const [telefoneError, setTelefoneError] = useState('');
    const [cpfError, setCpfError] = useState('');

    function validaTelefone(event) {
        try {
            service.validadorTelefone(event.target.value);
            setTelefoneError('');
        } catch (error) {
            setTelefoneError(error.message);
        }
    }

    function validaCPF(event) {
        try {
            service.validadorCPF(event.target.value);
            setCpfError('');
        } catch (error) {
            setCpfError(error.message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const telefone = formData.get("telefone");
        const cpf = formData.get("cpf");
        
        try {
            service.validadorTelefone(telefone);
            setTelefoneError('');
        } catch (error) {
            setTelefoneError(error.message);
        }

        try {
            service.validadorCPF(cpf);
            setCpfError('');
        } catch (error) {
            setCpfError(error.message);
        }
    }

    return ( 
        <div className="corpo-formulario">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome Completo:
                    <input type="text" />
                </label>
                <label>
                    Data de Nascimento:
                    <input type="date" />
                </label>
                <label>
                    E-mail:
                    <input type="email" />
                </label>
                <label>
                    Telefone:
                    <input
                        type="tel"
                        name="telefone"
                        inputMode="numeric"
                        onChange={validaTelefone}
                        onBlur={validaTelefone}
                    />
                    {telefoneError && (
                        <span className="telefone-error">{telefoneError}</span>
                    )}
                </label>
                <label>
                    CPF:
                    <input
                        type="text"
                        name="cpf"
                        inputMode="numeric"
                        onChange={validaCPF}
                        onBlur={validaCPF}
                    />
                    {cpfError && (
                        <span className="cpf-error">{cpfError}</span>
                    )}
                </label>
                <label>
                    RG:
                    <input type="text" />
                </label>
                <label>
                    Sexo:
                    <select>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </label>
                <label>
                    Estado Civil:
                    <select>
                        <option value="solteiro">Solteiro(a)</option>
                        <option value="casado">Casado(a)</option>
                        <option value="divorciado">Divorciado(a)</option>
                        <option value="viuvo">Viúvo(a)</option>
                    </select>
                </label>
                <label>
                    Nacionalidade:
                    <input type="text" />
                </label>
                <label>
                    Naturalidade:
                    <input type="text" />
                </label>
                <label>
                    Cargo:
                    <input type="text" />
                </label>
                <label>
                    Departamento:
                    <select>
                        <option value="rh">Recursos Humanos</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </label>
                <label>
                    Salário:
                    <input type="number" />
                </label>
                <label>
                    Tipo de vinculo:
                    <select>
                        <option value="clt">CLT</option>
                        <option value="pj">PJ</option>
                        <option value="estagio">Estágio</option>
                    </select>
                </label>
                <label>
                    Data de Admissão:
                    <input type="date" />
                </label>
                <label>
                    Data de Demissão:
                    <input type="date" />
                </label>
                <CepInput />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )

}


export default CadastroForm;