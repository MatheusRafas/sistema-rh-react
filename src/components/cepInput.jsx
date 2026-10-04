import { useState } from "react";
import { useForm } from "react-hook-form";
import viaCepService from "../services/viaCepService";

function CepInput() {
  const {register, setValue, setFocus} = useForm();
  const [errorMassage, setErrorMessage] = useState('');
  

  const checkCEP = async (event) => {
    const cep = event.target.value;
    setErrorMessage(''); // Limpa a mensagem de erro antes de fazer a requisição

    try {
    const data = await viaCepService(cep);

      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
   } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="cep-input">
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCEP}/>
        {errorMassage && <span className="cep-error">{errorMassage}</span>}
      </label>
      <label>
        Rua:
        <input type="text" {...register("address")} />
      </label>
      <label>
        Número:
        <input type="text" {...register("addressNumber")} />
      </label>
      <label>
        Bairro:
        <input type="text" {...register("neighborhood")} />
      </label>
      <label>
        Cidade:
        <input type="text" {...register("city")} />
      </label>
      <label>
        Estado:
        <input type="text" {...register("uf")} />
      </label>
    </div>
  )
}

export default CepInput;