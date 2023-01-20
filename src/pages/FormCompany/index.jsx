import React, { useState, useEffect } from 'react';
import { validate } from 'cnpj';
import { toast } from 'react-toastify';
import { isFloat, isDate, isMobilePhone } from 'validator';

import { Container } from '../../styles/GlobalStyles';
import { Form, Title, Error } from './styled';


export default function FormCompany(){
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
      if(!validate(cnpj)) {
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

      toast.success("tudo certo!")
    }

    return(
        <Container>
            <Title>Register New Company</Title>
            <p>{cnpj}</p>
            {razaoSocial}
            <Form onSubmit={handleSubmit}>
                <label htmlFor='cnpj'>
                  CNPJ: <input id='cnpj' type="text" placeholder="Insert CNPJ" onChange={(e) => setCnpj(e.target.value)} />
                  <Error>{cnpjError}</Error>
                </label>
                <label htmlFor='razaoSocial'>
                  Razão Social: <input type="text" id='razaoSocial' placeholder="razão social" onChange={(e) => setRazaoSocial(e.target.value)} />
                  <Error>{razaoSocialError}</Error>
                </label>
                <label htmlFor="nomeFantasia">
                  Nome Fantasia: <input type="text" id='nomeFantasia' placeholder="Nome Fantasia" onChange={(e) => setNomeFantasia(e.target.value)} />
                  <Error>{nomeFantasiaError}</Error>
                </label>
                <label htmlFor="atividade">
                  Atividade Principal: <input type="text" id='atividade' placeholder="Atividade Principal" onChange={(e) => setAtividade(e.target.value)} />
                  <Error>{atividadeError}</Error>
                </label>
                <label htmlFor="capitalSocial">
                  Capital Social: <input type="text" id='capitalSocial' placeholder="Capital Social" onChange={(e) => setCapitalSocial(e.target.value)} />
                  <Error>{capitalSocialError}</Error>
                </label>
                <label htmlFor="ultimaAtl">
                  Última Atualização: <input type="date" id='ultimaAtl' placeholder="Ultima Atualização" onChange={(e) => setUltimaAtl(e.target.value)} />
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
        </Container>
    );
}
