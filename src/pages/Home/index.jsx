import { useSelector } from 'react-redux';

import { selectCompanies } from '../../features/company/companySlice';

export default function Home(){
  const companies = useSelector(selectCompanies);

  return (
    <div className="Home">
      <h1>Home</h1>
      <ul id='companies'>
        {
          companies.map(company => (
            <li key={company.cnpj}>{company.razaoSocial} - {company.dataAtual}</li>
          ))
        }
      </ul>
    </div>
  );
};

