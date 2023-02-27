//import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OffCanvas from '../OffCanvas';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './styled.css';

export default function ListCompanies({ companies, handleDelete }) {
  const [show, setShow] = useState(false);
  const [indexCanva, setIndexCanva] = useState(0);

  const handleShow = (event, index) => {
    event.preventDefault();
    setIndexCanva(index);
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
    setIndexCanva(0);
  };

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
                    <Button variant="outline-success" onClick={(event) => handleShow(event, index)}>Ver Mais</Button>
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
      {companies.length ?
        <OffCanvas
          company={companies[indexCanva]}
          show={show}
          handleClose={handleClose}
        />
      : ''}
  </>
  );
}

ListCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
