import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home';
import NotFound from '../src/pages/NotFound';
import FormCompany from './pages/FormCompany';
import GlobalStyle from './styles/GlobalStyles'; // estilização global da aplicação

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<FormCompany />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  )
}

export default App;
