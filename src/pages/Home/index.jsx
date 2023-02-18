import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
//import { useState } from 'react';
//import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import { selectCompanies, deleteItem } from '../../features/company/companySlice';
import ListCompanies from '../../components/ListCompanies';
import { Title } from './styled';

export default function Home(){
  const companies = useSelector(selectCompanies);
  const dispatch = useDispatch();

  const handleDelete = (event, index) => {
    //exibir modal de confirmação
    //se confirmado
      dispatch(deleteItem(index));
      toast.success("Empresa removida com sucesso !");
    //se não confirmado
      return;
  };

  return (
    <div className="Home">
      <Container>
        <Title>EMPRESAS CADASTRADAS &ensp; <h5><Badge bg="success">{companies.length}</Badge></h5></Title>
        {companies.length > 0 ?
        <ListCompanies
          companies={companies}
          handleDelete={handleDelete}
        />
        :
        <small>Nenhuma empresa cadastrada</small>
        }
      </Container >
    </div>
  );
};

