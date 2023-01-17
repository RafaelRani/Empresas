import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';

export default function FormCompany(){
    const [cnpj, set_cnpj] = useState('');
    const [razao_social, set_razao_social] = useState('');
    const [nome_fantasia, set_nome_fantasia] = useState('');
    const [atividade, set_atividade] = useState('')
    const [capital_social, set_capital_social] = useState('');
    const [ultima_atl, set_ultima_atl] = useState('');
    const [nome_prop, set_nome_prop] = useState('');
    const [telefone, set_telefone] = useState('');

    return(
        <Container>
            <Title>Register New Company</Title>
            <Form>
                CNPJ: <input type="text" placeholder="Insert CNPJ" onChange={(e) => set_cnpj(e.target.value)} />
                Razão Social: <input type="text" placeholder="razão social" onChange={(e) => set_razao_social(e.target.value)} />
                Nome Fantasia: <input type="text" placeholder="Nome Fantasia" onChange={(e) => set_nome_fantasia(e.target.value)} />
                Atividade Principal: <input type="text" placeholder="Atividade Principal" onChange={(e) => set_atividade(e.target.value)} />
                Capital Social: <input type="number" placeholder="Capital Social" onChange={(e) => set_capital_social(e.target.value)} />
                Última Atualização: <input type="date" placeholder="Ultima Atualização" onChange={(e) => set_ultima_atl(e.target.value)} />
                {/* campos não trazidos pela API */}
                Nome Proprietário: <input type="text" placeholder="Nome do Proprietário" onChange={(e) => set_nome_prop(e.target.value)} />
                Telefone: <input type="tel" placeholder="(DDD) XXXXX-XXXX" onChange={(e) => set_telefone(e.target.value)} />
                <button type="submit">Enviar</button>
            </Form>
        </Container>
    );
}
