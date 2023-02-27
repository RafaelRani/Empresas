import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import { selectCompanies, deleteItem } from '../../features/company/companySlice';
import ListCompanies from '../../components/ListCompanies';
import { Title } from './styled';
import ModalBootstrap from '../../components/ModalBootstrap';

export default function Home(){
  const [show, setShow] = useState(false);
  const [indexDelete, setIndexDelete] = useState(0);

  const companies = useSelector(selectCompanies);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (event, index) => {
    setIndexDelete(index);
    setShow(true);
    return;
  };

  const handleDelete = (event, index) => {
    event.preventDefault();
    setShow(false);
    dispatch(deleteItem(index));
    setIndexDelete(0);
    toast.success("Empresa removida com sucesso !");
    return;
  };

  return (
    <div className="Home">
      <Container>
        <Title>EMPRESAS CADASTRADAS &ensp; <h5><Badge bg="success">{companies.length}</Badge></h5></Title>
        { companies.length ?
          <>
          <ListCompanies
            companies={companies}
            handleDelete={handleShow}
          />
          <ModalBootstrap
            show={show}
            handleClose={handleClose}
            handleDelete={handleDelete}
            company={companies[indexDelete]}
            indexDelete={indexDelete}
          />
          </>
        :
          <small>Nenhuma empresa cadastrada</small>
        }
      </Container >
    </div>
  );
};

