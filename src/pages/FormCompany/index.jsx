import React, { useState, useEffect } from 'react';
import { validate } from 'cnpj';
import { toast } from 'react-toastify';
import { isFloat, isDate, isMobilePhone } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { selectCompanies, add } from '../../features/company/companySlice';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title, Error } from './styled';


export default function FormCompany(){
    const dispatch = useDispatch();

    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [atividade, setAtividade] = useState('')
    const [capitalSocial, setCapitalSocial] = useState('');
    const [ultimaAtl, setUltimaAtl] = useState('');
    const [nomeProp, setNomeProp] = useState('');
    const [telefone, setTelefone] = useState('');

    const [cnpjError, setCnpjError] = useState('');
    const [razaoSocialError, setRazaoSocialError] = useState('');
    const [nomeFantasiaError, setNomeFantasiaError] = useState('');
    const [atividadeError, setAtividadeError] = useState('')
    const [capitalSocialError, setCapitalSocialError] = useState('');
    const [ultimaAtlError, setUltimaAtlError] = useState('');
    const [nomePropError, setNomePropError] = useState('');
    const [telefoneError, setTelefoneError] = useState('');

    const empresas = useSelector(selectCompanies); //precisa ser chamado fora de qualquer função

    const handleBlur = async(e) => {
      e.preventDefault();

      setCnpjError('');

      const cnpjFormatted = cnpj.trim().replace(/[^0-9]/g, ''); // expressão regular que só retorna caracteres numéricos entre 0 e 9
      if(!validate(cnpjFormatted)) {
        setCnpjError("CNPJ inválido!");
      }else{
        try {
          const response = await fetch('https://publica.cnpj.ws/cnpj/'+cnpjFormatted);
          const data = await response.json();
          if(data.razao_social != undefined){
            setRazaoSocial(typeof(data.razao_social) == 'string' ? data.razao_social : '');
            setNomeFantasia(typeof(data.estabelecimento.nome_fantasia) == 'string' ? data.estabelecimento.nome_fantasia : '');
            setAtividade(typeof(data.estabelecimento.atividade_principal.descricao) == 'string' ? data.estabelecimento.atividade_principal.descricao : '');
            setCapitalSocial(typeof(data.capital_social) == 'string' ? data.capital_social : '');

            let dataRecebida = new Date(data.atualizado_em);
            let year = dataRecebida.getFullYear();
            let month = String(dataRecebida.getMonth() + 1).padStart(2,'0');
            let day = dataRecebida.getDate().toString().padStart(2,'0');

            setUltimaAtl(`${year}-${month}-${day}`);
          }else{
            toast.error('Falha na requisição ao CNPJ!');
          }
        } catch(err){
          toast.error('Falha na consulta ao servidor para obter CNPJ!');
          toast.error(err);
        }
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      setCnpjError('');
      setRazaoSocialError('');
      setNomeFantasiaError('');
      setAtividadeError('');
      setCapitalSocialError('');
      setUltimaAtlError('');
      setNomePropError('');
      setTelefoneError('');

      // validação de entrada
      let formErrors = false;
      const cnpjFormatted = cnpj.trim().replace(/[^0-9]/g, '');
      if(!validate(cnpjFormatted)) {
        setCnpjError("CNPJ inválido!");
        formErrors = true;
      }
      if (razaoSocial.length < 3 || razaoSocial.length > 255) {
        setRazaoSocialError('Razão Social precisa ter entre 3 e 255 caracteres');
        formErrors = true;
      }
      if (nomeFantasia.length < 1 || nomeFantasia.length > 255) {
        setNomeFantasiaError('Nome Fantasia precisa ter entre 1 e 255 caracteres');
        formErrors = true;
      }
      if (atividade.length < 3 || atividade.length > 350) {
        setAtividadeError('Atividade precisa ter entre 3 e 350 caracteres');
        formErrors = true;
      }
      if (!isFloat(String(capitalSocial))) {
        setCapitalSocialError('Capital Social inválido!');
        formErrors = true;
      }
      if(!isDate(String(ultimaAtl))){
        setUltimaAtlError('Data inválida!')
        formErrors = true;
      }
      if (nomeProp.length < 3 || nomeProp.length > 255) {
        setNomePropError('O nome do proprietário precisa ter entre 3 e 255 caracteres');
        formErrors = true;
      }
      if(!isMobilePhone(String(telefone))) {
        setTelefoneError('Número de telefone inválido!')
        formErrors = true;
      }

      if (formErrors) return;

      dispatch(add({cnpjFormatted, razaoSocial, nomeFantasia, atividade, capitalSocial, ultimaAtl, nomeProp, telefone})) //alterando estado passando valores
      //alterando estado sem passar valores: dispatch(add())
      //dispatch({ type: 'ADD', company });
      toast.success("tudo certo!");
    }

    const handleSelect = (e) => {
      e.preventDefault();
      empresas.map(empresa => console.log(empresa.razaoSocial));
    }

    return(
        <Container>
            <Title>Register New Company</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='cnpj'>
                  CNPJ: <input id='cnpj' type="text" placeholder="Insert CNPJ" onBlur={handleBlur} onChange={(e) => setCnpj(e.target.value)} value={cnpj} />
                  <Error>{cnpjError}</Error>
                </label>
                <label htmlFor='razaoSocial'>
                  Razão Social: <input type="text" id='razaoSocial' placeholder="razão social" onChange={(e) => setRazaoSocial(e.target.value)} value={razaoSocial} />
                  <Error>{razaoSocialError}</Error>
                </label>
                <label htmlFor="nomeFantasia">
                  Nome Fantasia: <input type="text" id='nomeFantasia' placeholder="Nome Fantasia" onChange={(e) => setNomeFantasia(e.target.value)} value={nomeFantasia} />
                  <Error>{nomeFantasiaError}</Error>
                </label>
                <label htmlFor="atividade">
                  Atividade Principal: <input type="text" id='atividade' placeholder="Atividade Principal" onChange={(e) => setAtividade(e.target.value)} value={atividade}/>
                  <Error>{atividadeError}</Error>
                </label>
                <label htmlFor="capitalSocial">
                  Capital Social: <input type="text" id='capitalSocial' placeholder="Capital Social" onChange={(e) => setCapitalSocial(e.target.value)} value={capitalSocial}/>
                  <Error>{capitalSocialError}</Error>
                </label>
                <label htmlFor="ultimaAtl">
                  Última Atualização: <input type="date" id='ultimaAtl' placeholder="Ultima Atualização" onChange={(e) => setUltimaAtl(e.target.value)} value={ultimaAtl}/>
                  <Error>{ultimaAtlError}</Error>
                </label>
                {/* campos não trazidos pela API */}
                <label htmlFor="nomeProp">
                  Nome Proprietário: <input type="text" id='nomeProp' placeholder="Nome do Proprietário" onChange={(e) => setNomeProp(e.target.value)} />
                  <Error>{nomePropError}</Error>
                </label>
                <label htmlFor="telefone">
                  Telefone: <input type="tel" id='telefone' placeholder="(DDD) XXXXX-XXXX" onChange={(e) => setTelefone(e.target.value)} />
                  <Error>{telefoneError}</Error>
                </label>
                <button type="submit">Enviar</button>
            </Form>
            <button type='submit' onClick={handleSelect}>Ler</button>
        </Container>
    );
}
