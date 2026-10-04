import "../style/cadastroForm.css";
import CepInput from './cepInput';

function CadastroForm() {
    return ( 
        <div className="corpo-formulario">
            <form>
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
                    <input type="tel" />
                </label>
                <label>
                    CPF:
                    <input type="text" />
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
            </form>
        </div>
    )

}


export default CadastroForm;