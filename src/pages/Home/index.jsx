import { useSelector } from 'react-redux';

import { selectCompanies } from '../../features/company/companySlice';

export default function Home(){
  const companies = useSelector(selectCompanies);

  const handleClick = (e) => {
    e.preventDefault();
    companies.map(empresa => console.log(empresa.razaoSocial));
  }

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>Aqui será exibida a lista de empresas cadastradas</p>
      <ul id='companies'>
      </ul>
      <button type="submit" onClick={handleClick}>Ver Empresas</button>
    </div>
  );
};

