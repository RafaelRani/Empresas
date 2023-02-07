//import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ListCompanies({ companies, handleDelete }) {
  return (
    <ul className="companies">
      {companies.map((company, index) => (
        <li key={company.cnpj}>
          {index + ' - ' + company.razaoSocial + ' - ' + company.dataAtual}
          <span>
            <Link to="/company" state={String(index)}>
              <FaEdit
                className="edit"
              />
            </Link>
            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

ListCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
