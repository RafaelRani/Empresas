import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { selectCompanies, deleteItem } from '../../features/company/companySlice';
import ListCompanies from '../../components/ListCompanies';
import { Title } from './styled';

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
        {companies.length > 0 ?
        <ListCompanies
          companies={companies}
          handleDelete={handleShow}
        />
        :
        <small>Nenhuma empresa cadastrada</small>
        }
      </Container >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Deletar?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{companies.length > 0 ? companies[indexDelete].razaoSocial : ''}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={(event) => handleDelete(event, indexDelete)}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

