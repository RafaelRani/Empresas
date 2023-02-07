// para persistir os dados globais na aplicação (Como se fosse um LocalStorage)
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CRUD-EMPRESA', // nome da aplicação
      storage,
      whitelist: ['company'], // módulo que quer salvar para persistir
    },
    reducers,
  );

  return persistedReducers;
};
