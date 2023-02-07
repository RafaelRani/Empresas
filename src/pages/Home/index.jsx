import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { selectCompanies, deleteItem } from '../../features/company/companySlice';
import ListCompanies from '../../components/ListCompanies';

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
      <h1>Home</h1>
      <ListCompanies
        companies={companies}
        handleDelete={handleDelete}
      />
    </div>
  );
};

