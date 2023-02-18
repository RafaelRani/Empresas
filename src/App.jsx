import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import store from './app/store';
import Home from './pages/Home';
import NotFound from '../src/pages/NotFound';
import FormCompany from './pages/FormCompany';
import GlobalStyle from './styles/GlobalStyles';
import { Menu } from './components/Menu';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<FormCompany />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
