import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companySlice';

export default configureStore({
   reducer: {
     companies: companiesReducer,
   },
});
