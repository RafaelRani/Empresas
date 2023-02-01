import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../features/company/companySlice';

export default configureStore({
   reducer: {
     company: companyReducer,
   },
});
