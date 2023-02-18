//import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import './styled.css';

export default function ListCompanies({ companies, handleDelete }) {
  const [show, setShow] = useState(false);
  const [indexCanva, setIndexCanva] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (event, index) => {
    setIndexCanva(index);
    setShow(true);
  }

  return (
    <>
      <ListGroup>
        {companies.map((company, index) => (
          <ListGroup.Item key={company.cnpj}>
            <Card border="none" style={{ border: 'none' }}>
              <Card.Header>
                <h3>{company.razaoSocial}</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>{company.nomeFantasia}</Card.Title>
                <Card.Subtitle>CNPJ: <strong>{company.cnpjFormatted}</strong></Card.Subtitle>
                <Card.Text>
                  <Row>
                    <Col>Capital Social: {company.capitalSocial}</Col>
                    <Col>Atualizado em: {company.dataAtual}</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Button variant="outline-success" onClick={(event) => handleShow(event, index)} href="#">Ver Mais</Button>
                  </Col>
                  <Col>
                    <span>
                      <Link to="/company" state={String(index)}>
                        <FaEdit
                          className="edit"
                          size={24}
                        />
                      </Link>
                      <Link to="#">
                        <FaWindowClose
                          onClick={(event) => handleDelete(event, index)}
                          className="delete"
                          size={24}
                        />
                      </Link>
                    </span>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{companies[indexCanva].razaoSocial}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <strong>Atividade principal:</strong><p>{companies[indexCanva].atividade}</p>
          <strong>Proprietário:</strong><p>{companies[indexCanva].nomeProp}</p><p>Contato: {companies[indexCanva].telefone}</p>
          <strong>CNPJ Atualizado em: </strong><p>{companies[indexCanva].ultimaAtl}</p>
        </Offcanvas.Body>
      </Offcanvas>
  </>
  );
}

ListCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
